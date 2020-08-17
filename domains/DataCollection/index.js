import * as React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

import Forms from './Forms';

export default function DataCollection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.line}>Welcome to the data collection page.</Text>
      <Forms style={styles.line} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
  },
  line: {
    flex: .5,
    padding: 10,
  }
});
