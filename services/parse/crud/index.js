import { Parse } from 'parse/react-native';

function retrieveHelloFunction() {
  Parse.Cloud.run('hello').then((result) => result);
}

export default retrieveHelloFunction;
