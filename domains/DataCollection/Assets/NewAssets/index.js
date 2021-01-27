import ViewPager from '@react-native-community/viewpager';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AssetCore from './AssetCore';
import AssetSupplementary from './AssetSupplementary';

const NewAsset = () => (
  <ViewPager style={styles.viewPager} initialPage={0}>
    <View key="1" style={styles.page}>
      <AssetCore />
    </View>
    <View key="2" style={styles.page}>
      <AssetSupplementary />
    </View>
  </ViewPager>
);

const styles = StyleSheet.create({
  viewPager: {
    width: '100%',
    // height: '100%',
    height: 450,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default NewAsset;
