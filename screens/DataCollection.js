import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image, Platform, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function DataCollection() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the data collection page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    flex: 1,
    color: '#000',
    padding: 10
  }
})