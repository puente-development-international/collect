import { Parse } from 'parse/react-native';

function retrieveHelloFunction() {
  Parse.Cloud.run('hello').then((result) => console.log(result));

}


export default retrieveHelloFunction;
