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

export default initialize;
