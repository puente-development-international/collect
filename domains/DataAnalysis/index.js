import * as React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

export default function DataAnalysis() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the data analysis page.</Text>
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
});
