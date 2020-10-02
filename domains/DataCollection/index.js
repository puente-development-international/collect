// import * as React from 'react';
import React, { useState } from 'react';
import {
  Text, ScrollView, View
} from 'react-native';

import {
  Button
} from 'react-native-paper';

import { layout } from '../../modules/theme';

import Header from '../../components/Header';

import Forms from './Forms';
import FormGallery from './FormGallery';

const DataCollection = ({ navigation }) => {
  const [scrollViewScroll, setScrollViewScroll] = useState();
  const [view, setView] = React.useState('Root');
  // const [showGallery, setShowGallery] = React.useState(false);

  const switchToFormGallery = () => {
    setShowForms('Gallery');
  };

  return (
    <View
      style={layout.screenContainer}
      onStartShouldSetResponderCapture={() => {
        setScrollViewScroll(true);
      }}
    >
      <Header />

      <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={scrollViewScroll}>
        {view === 'Root'
          && (
            <View>
              <Text style={layout.line} onPress={() => setView('Forms')}>New Record</Text>
              <Text style={layout.line}>Find Record</Text>
              {/* <Text style={layout.line}>New Asset</Text>
              <Text style={layout.line}>Find Asset</Text> */}
              <Text style={layout.line} onPress={() => setView('Gallery')}>View All Forms</Text>
            </View>
          )}
        {view === 'Forms'
          && (
            <View>
              <Button onPress={() => setView('Root')}>Back to Data Collection Screen</Button>
              <Forms
                style={layout.line}
                navigation={navigation}
                scrollViewScroll={scrollViewScroll}
                setScrollViewScroll={setScrollViewScroll}
              />
            </View>
          )}
        {view === 'Gallery' && (
          <FormGallery
            navigation={navigation}
            setDataCollectionView={setView}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default DataCollection;
