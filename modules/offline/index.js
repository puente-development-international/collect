import * as Network from 'expo-network';

// checks whether user is connected to internet, return true if connected, false otherwise
// this definitely works for ios, not tested with android
const checkOnlineStatus = async () => {
  const status = await Network.getNetworkStateAsync();
  const { isConnected } = status;
  return isConnected;
};

export default checkOnlineStatus;
