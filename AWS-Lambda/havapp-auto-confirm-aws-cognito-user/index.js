'use strict';

// Source:
// https://gist.github.com/charltoons/9f13f7c4993420ca23013ee33a3a4619

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2))
  const modifiedEvent = event
  
  // check that we're acting on the right trigger
  if (event.triggerSource === "PreSignUp_SignUp"){
    
    // auto confirm the user
    modifiedEvent.response.autoConfirmUser = true
    
    callback(null, modifiedEvent)
    return
  }
  
  // Throw an error if invoked from the wrong trigger
  callback(`Misconfigured Cognito Trigger ${ event.triggerSource }`)
};