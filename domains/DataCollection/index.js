// import * as React from 'react';
import React, { useState } from 'react';
import {
  StyleSheet, Text, ScrollView, View
} from 'react-native';

import Forms from './Forms';

export default function DataCollection({ navigation }) {
  const [scrollViewScroll, setScrollViewScroll] = useState();
  return (
    <View style={styles.container} onStartShouldSetResponderCapture={() => {
      setScrollViewScroll(true);
    }}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always" scrollEnabled={scrollViewScroll}>
        <Text style={styles.line}>Welcome to the data collection page.</Text>
        <Forms style={styles.line} navigation={navigation} scrollViewScroll={scrollViewScroll} setScrollViewScroll={setScrollViewScroll}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    flex: 0.5,
    padding: 10,
  }
});
