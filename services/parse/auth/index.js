import { Parse } from 'parse/react-native';
import { AsyncStorage, NativeModules } from 'react-native';
import getEnvVars from '../../../environment';


function initialize() {
  const { parseAppId, parseJavascriptKey, parseServerUrl } = getEnvVars();

  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize(parseAppId, parseJavascriptKey);
  Parse.serverURL = parseServerUrl;
  console.log(`Initialize Parse with App ID:${parseAppId}, Javascript Key: ${parseJavascriptKey}`); // eslint-disable-line
}

function retrieveSignUpFunction() {
  const params = {
    firstname: 'test1',
    lastname: 'test2',
    username: 'check10',
    password: '12345',
    email: 'notreal110@gmail.com',
    organization: 'nonprofit-9'
  };
  Parse.Cloud.run("signup", params).then((result) => result);
}

function retrieveSignInFunction(postParameters) {
  Parse.Cloud.run('signin', postParameters).then((result) => result);
}

function retrieveSignOutFunction() {
  Parse.Cloud.run('signout').then((result) => result);
}

function retrieveForgotPasswordFunction() {
  Parse.Cloud.run('forgotPassword').then((result) => result);
}

function retrieveCurrentUserFunction() {
  Parse.Cloud.run('currentUser').then((result) => result);
}

function retrieveDeleteUserFunction() {
  Parse.Cloud.run('deleteUser').then((result) => result);
}

export { initialize, retrieveSignUpFunction, retrieveSignInFunction, retrieveSignOutFunction, retrieveForgotPasswordFunction, retrieveCurrentUserFunction, retrieveDeleteUserFunction };

