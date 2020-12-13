import * as React from 'react';
import {
  Text, View
} from 'react-native';

import { layout } from '../../modules/theme';

import Header from '../../components/Header';
import { Button } from 'react-native-paper';
import { deleteData, getData } from '../../modules/async-storage';

export default function DataAnalysis() {
  const deleteOfflineForms = async  () => {
    console.log('deete')
    await deleteData('offlineIDForms');
    await getData('offlineIDForms').then((data) => {
      console.log(data)
    })
  }
  return (
    <View style={layout.screenContainer}>
      <Header />
      <Text>Welcome to the data analysis page.</Text>
      <Button>Submit Offline forms</Button>
      <Button onPress={() => deleteOfflineForms}>Delete all offline forms</Button>
    </View>
  );
}
