// import * as React from 'react';
import React, { useState } from 'react';
import {
  StyleSheet, Text, ScrollView, View
} from 'react-native';

import Forms from './Forms';

export default function DataCollection({ navigation }) {
  const [scrollViewScroll, setScrollViewScroll] = useState();

  const [showForms, setShowForms] = React.useState(false);
  const [selectForm, setSelectForm] = React.useState('id');

  return (
    <View
      style={styles.container}
      onStartShouldSetResponderCapture={() => {
        setScrollViewScroll(true);
      }}
    >
      <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={scrollViewScroll}>
        {!showForms
          && (
            <View>
              <Text style={styles.line} onPress={() => setShowForms(true)}>New Record</Text>
              <Text style={styles.line}>Find Record</Text>
              <Text style={styles.line}>New Asset</Text>
              <Text style={styles.line}>Find Asset</Text>
            </View>
          )}
        {showForms
          && (
            <View>
              <Forms
                style={styles.line}
                navigation={navigation}
                selectedForm={selectForm}
                setSelectedForm={setSelectForm}
                scrollViewScroll={scrollViewScroll}
                setScrollViewScroll={setScrollViewScroll}
              />
            </View>
          )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  line: {
    flex: 0.5,
    padding: 10,
  }
});
