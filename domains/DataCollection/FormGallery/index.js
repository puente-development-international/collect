import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  Text, Button, Title, Checkbox
} from 'react-native-paper';
import { theme } from '../../../modules/theme';

const FormGallery = ({ setDataCollectionView }) => {
  return (
    <View>
      <Text onPress={() => setDataCollectionView('Root')}>Hi</Text>
    </View>
  )
}

export default FormGallery