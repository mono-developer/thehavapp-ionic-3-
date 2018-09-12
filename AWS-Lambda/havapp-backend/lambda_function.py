from botocore.client import Config
import boto3
import json
import uuid
import sys, traceback


dynamodb = boto3.client('dynamodb')
s3 = boto3.client('s3', config=Config(signature_version='s3v4'))


def _response(code, body):
    return {
        'statusCode': code,
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': json.dumps(body)
    }


def add_property(event):
    print('START: add_property')
    property_id = uuid.uuid4()
    body = json.loads(event['body'])
    
    print('start dynamo')
    dynamodb.put_item(
        TableName='HAVAPP_property',
        Item={
            'user_id': {
                'S': event['requestContext']['authorizer']['claims']['cognito:username']
            },
            'email': {
                'S': event['requestContext']['authorizer']['claims']['email']
            },
            'property_id': {
                'S': str(property_id)
            },
            'title': {
                'S': body['title']
            },
            'comment': {
                'S': body['comment']
            }
        }
    )
    print('finish dynamo')

    presigned_upload_urls = []
    for i in range(1):
        photo_key = uuid.uuid4()
        url = s3.generate_presigned_url('put_object', 
            Params={
                'Bucket': 'havapp-photo',
                'Key': '{}/{}-{}.jpg'.format(property_id, i, photo_key)
            },
            ExpiresIn=3600,
            HttpMethod='PUT'
        )
        presigned_upload_urls.append({
            'key': '{}/{}-{}.jpg'.format(property_id, i, photo_key),
            'upload_url': url
        })

    resp_body = {
        'property_id': str(property_id),
        'upload_urls': presigned_upload_urls
    }

    return _response('201', resp_body)


def acknowledge_photo_has_been_uploaded(event):
    print('START: acknowledge_photo_has_been_uploaded')
    body = json.loads(event['body'])

    dynamodb.update_item(
        TableName='HAVAPP_property',
        Key={
            'user_id': {
                'S': event['requestContext']['authorizer']['claims']['cognito:username']
            },
            'property_id': {
                'S': body['property_id']
            }
        },
        UpdateExpression="ADD photos_set :element",
        ExpressionAttributeValues={
            ":element": {
                "SS": [ body['photo_key'] ]
            }
        }
    )
    
    resp_body = {
        'message': 'OK'
    }

    return _response('201', resp_body)


def lambda_handler(event, context):
    print('BODY:')
    print(event['body'])
    route = {
        '/add-property/': add_property,
        '/acknowledge-photo-has-been-uploaded/': acknowledge_photo_has_been_uploaded,
    }
    
    if event['path'] not in route:
        resp_body = {
            'message': 'Not Found'
        }
        response = _response('404', resp_body)
        return
    
    f = route[event['path']]

    try:
        response = f(event)
    except Exception as e:
        traceback.print_exc()
        print('EXCEPTION')
        print(e)
        print('END EXCEPTION')
        resp_body = {
            'message': 'Internal Error'
        }
        response = _response('500', resp_body)

    return response

