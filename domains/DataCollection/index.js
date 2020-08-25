import * as React from 'react';
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';

import Forms from './Forms';

export default function DataCollection({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.line}>Welcome to the data collection page.</Text>
      <Forms style={styles.line} navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  line: {
    flex: 0.5,
    padding: 10,
  }
});
