// import * as React from 'react';
import React, { useState } from 'react';
import {
  Text, ScrollView, View
} from 'react-native';

import {
  Button, Card
} from 'react-native-paper';

import { layout } from '../../modules/theme';

import Header from '../../components/Header';

import Forms from './Forms';
import FormGallery from './FormGallery';

import { getData } from '../../modules/async-storage';
import FindResidents from '../../components/FindResidents';

const DataCollection = ({ navigation }) => {
  const [scrollViewScroll, setScrollViewScroll] = useState();
  const [view, setView] = useState('Root');
  const [organization, setOrganization] = useState('');
  const [selectPerson, setSelectPerson] = useState();

  const navigateToRoot = async () => {
    setView('Root');
  };

  const navigateToNewRecord = async () => {
    setView('Forms');
  };

  const navigateToGallery = async () => {
    setView('Gallery');
  };

  const navigateToFindRecords = async () => {
    await getData('organization').then((org) => {
      setOrganization(org);
      setView('Find Records');
    });
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
              <Card style={layout.cardSmallStyle} onPress={navigateToNewRecord}>
                <Text>New Record</Text>
              </Card>
              <Card style={layout.cardSmallStyle} onPress={navigateToFindRecords}>
                <Text>Find Record</Text>
              </Card>
              <Card style={layout.cardSmallStyle} onPress={navigateToGallery}>
                <Text>View All Forms</Text>
              </Card>
            </View>
          )}
        {view === 'Forms'
          && (
            <View>
              <Button icon="arrow-left" width={100} onPress={navigateToRoot}>
                <Text>Back</Text>
              </Button>
              <Forms
                style={layout.line}
                navigation={navigation}
                scrollViewScroll={scrollViewScroll}
                setScrollViewScroll={setScrollViewScroll}
                navigateToGallery={navigateToGallery}
              />
            </View>
          )}
        {view === 'Gallery' && (
          <View>
            <Button icon="arrow-left" width={100} onPress={navigateToRoot}>
              <Text>Back</Text>
            </Button>
            <FormGallery
              navigation={navigation}
              navigateToRoot={navigateToRoot}
            />
          </View>
        )}
        {view === 'Find Records'
          && (
            <View>
              <Button icon="arrow-left" width={100} onPress={navigateToRoot}>
                <Text>Back</Text>
              </Button>
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
