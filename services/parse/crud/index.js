import { Parse } from 'parse/react-native';

function retrieveHelloFunction() {
  Parse.Cloud.run('hello').then((result) => result);
}
function residentIDQuery() {
  return new Promise((resolve, reject) => {
    Parse.Cloud.run('genericQuery').then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

function postObjectsToClass(params) {
  return new Promise((resolve, reject) => {
    Parse.Cloud.run('postObjectsToClass', params).then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

export {
  retrieveHelloFunction,
  residentIDQuery,
  postObjectsToClass
};
