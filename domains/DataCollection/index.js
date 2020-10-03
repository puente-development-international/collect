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

import { getData } from '../../modules/async-storage';
import FindResidents from '../../components/FindResidents';

const DataCollection = ({ navigation }) => {
  const [scrollViewScroll, setScrollViewScroll] = useState();
  const [view, setView] = React.useState('Root');
  const [findFormsView, setFindFormsView] = React.useState(false);
  const [organization, setOrganization] = useState('');
  const [selectPerson, setSelectPerson] = useState();

  const navigateToFindRecords = async () => {
    await getData('organization').then((org) => {
      setOrganization(org);
      setFindFormsView(true);
    });
  }

  return (
    <View
      style={layout.screenContainer}
      onStartShouldSetResponderCapture={() => {
        setScrollViewScroll(true);
      }}
    >
      <Header />

      <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={scrollViewScroll}>
        {view === 'Root' && !findFormsView
          && (
            <View>
              <Text style={layout.line} onPress={() => setView('Forms')}>New Record</Text>
              <Text style={layout.line} onPress={navigateToFindRecords}>Find Record</Text>
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
        {findFormsView
          && (
            <View>
              <FindResidents
                selectPerson={selectPerson}
                setSelectPerson={setSelectPerson}
                organization={organization}
              />
            </View>
          )}
      </ScrollView>
    </View>
  );
};

export default DataCollection;
