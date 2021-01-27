import React from 'react';
import { View } from 'react-native';

import NewAssets from './NewAssets';
import ViewAssets from './ViewAssets';

const Assets = ({
  selectedAsset
}) => (
  <View>
    {/* <TouchableWithoutFeedback  accessible={false}> */}
    {selectedAsset === null && (
      <NewAssets />
    )}
    {selectedAsset === '' && (
      <ViewAssets />
    )}
    {/* </TouchableWithoutFeedback> */}
  </View>
);

export default Assets;
