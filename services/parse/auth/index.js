import { Parse } from 'parse/react-native';
import { AsyncStorage } from 'react-native';
import getEnvVars from '../../../environment';

function initialize() {
  const { parseAppId, parseJavascriptKey, parseServerUrl } = getEnvVars();

  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize(parseAppId, parseJavascriptKey);
  Parse.serverURL = parseServerUrl;
  console.log(`Initialize Parse with App ID:${parseAppId}, Javascript Key: ${parseJavascriptKey}`); // eslint-disable-line
}

function retrieveSignUpFunction(params) {
  return new Promise((resolve, reject) => {
    Parse.Cloud.run('signup', params).then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

function retrieveSignInFunction(username, password) {
  return new Promise((resolve, reject) => {
    // sign in with either phonenumber (username) or email handled with logIn
    Parse.User.logIn(String(username), String(password)).then((user) => {
      console.log(`User logged in successful with username: ${user.get('username')}`); // eslint-disable-line
      resolve(user);
    }, (error) => {
      console.log(`Error: ${error.code} ${error.message}`); // eslint-disable-line
      reject(error);
    });
  });
}

function retrieveSignOutFunction() {
  return new Promise((resolve, reject) => {
    Parse.User.logOut().then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

function retrieveForgotPasswordFunction(params) {
  Parse.Cloud.run('forgotPassword', params).then((result) => result);
}

function retrieveCurrentUserFunction() {
//   ASYNC VERSION -- needed this to switch to data collection as home screen
//   return new Promise((resolve, reject) => {
//     Parse.User.currentAsync().then((u) => {
//       // console.log(u);
//       const user = new Parse.User();
//       user.id = u.id;
//       user.name = u.get('username');
//       user.email = u.get('email');
//       user.organization = u.get('organization');
//       user.role = u.get('role');
//       resolve(user.save());
//     }, (error) => {
//       console.log(error);
//       reject(error);
//     })
//   })
// }

  const u = Parse.User.current();
  if (u) {
    const user = new Parse.User();
    user.id = u.id;
    user.name = u.get('username');
    user.email = u.get('email');
    user.organization = u.get('organization');
    user.role = u.get('role');
    return user;
  }
  return null;
}

function retrieveDeleteUserFunction(params) {
  Parse.Cloud.run('deleteUser', params).then((result) => result);
}

export {
  initialize, retrieveSignUpFunction, retrieveSignInFunction, retrieveSignOutFunction,
  retrieveForgotPasswordFunction, retrieveCurrentUserFunction, retrieveDeleteUserFunction
};
