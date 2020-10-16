// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import {
  Text, ScrollView, View, StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';

import {
  Button, Card
} from 'react-native-paper';

import { layout, theme } from '../../modules/theme';

import Header from '../../components/Header';

import Forms from './Forms';
import FormGallery from './FormGallery';

import { getData } from '../../modules/async-storage';

import FindResidents from '../../components/FindResidents';

import { customQueryService } from '../../services/parse/crud';

import ComingSoonSVG from '../../assets/graphics/static/Adventurer.svg';
import FindRecordSVG from '../../assets/graphics/static/Find-Record-Icon.svg';
import NewRecordSVG from '../../assets/icons/New-Record-icon.svg';

const puenteForms = [
  { tag: 'id', name: 'Resident ID' },
  { tag: 'env', name: 'Environmental Health' },
  { tag: 'med-eval', name: 'Medical Evaluation' }
];

const DataCollection = ({ navigation }) => {
  const [scrollViewScroll, setScrollViewScroll] = useState();
  const [view, setView] = useState('Root');
  const [selectedForm, setSelectedForm] = useState('id');

  const [customForms, setCustomForms] = useState([]);
  const [customForm, setCustomForm] = useState();

  const [selectPerson, setSelectPerson] = useState();
  const [surveyee, setSurveyee] = useState({});

  const [surveyingOrganization, setSurveyingOrganization] = useState('');
  const [surveyingUser, setSurveyingUser] = useState();

  useEffect(() => {
    getData('currentUser').then((user) => {
      setSurveyingUser(`${user.firstname} ${user.lastname}`);
    });

    getData('organization').then((org) => {
      setSurveyingOrganization(org || surveyingOrganization);
    });

    customQueryService(0, 5000, 'FormSpecificationsV2', 'organizations', surveyingOrganization).then((forms) => {
      setCustomForms(JSON.parse(JSON.stringify(forms)));
    });
  }, [surveyingUser, surveyingOrganization, customForms]);

  const navigateToRoot = async () => {
    setView('Root');
  };

  const navigateToNewRecord = async (formTag, surveyeePerson) => {
    await getData('organization').then((org) => {
      setSurveyingOrganization(org || surveyingOrganization);
      setView('Forms');
      setSurveyee(surveyeePerson || surveyee);
      setSelectedForm(formTag || 'id');
    });
  };

  const navigateToCustomForm = async (form, surveyeePerson) => {
    await getData('organization').then((org) => {
      setSurveyingOrganization(org || surveyingOrganization);
      setView('Forms');
      setSurveyee(surveyeePerson || surveyee);
      setSelectedForm('custom');
      setCustomForm(form || '');
    });
  };

  const navigateToGallery = async () => {
    setView('Gallery');
  };

  const navigateToFindRecords = async () => {
    await getData('organization').then((org) => {
      setSurveyingOrganization(org || surveyingOrganization);
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
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={scrollViewScroll}>
          {view === 'Root'
            && (
              <View>
                {/* <View style={styles.horizontalLine} />
              <Title>{surveyingUser}</Title>
              <View style={styles.map}>
                <ComingSoonSVG height={250} marginLeft="auto" marginRight="auto" />
              </View>
              <View style={styles.userInfoContainer}>
                <View style={styles.mySurveysContainer}>
                  <Text>My surveys collected: 21</Text>
                </View>
                <View style={styles.totalSurveysContainer}>
                  <Text>Total surveys</Text>
                  <Text>collected: 21</Text>
                </View>
              </View>
              <View style={styles.horizontalLine} /> */}
                <View style={styles.screenFlexRowWrap}>
                  <View style={styles.cardContainer}>
                    <Card style={styles.cardSmallStyle} onPress={() => navigateToNewRecord()}>
                      <NewRecordSVG height={70} style={styles.svg} />
                      <Button marginTop="auto">New Record</Button>
                    </Card>
                    <Card style={styles.cardSmallStyle} onPress={navigateToFindRecords}>
                      <FindRecordSVG height={65} style={styles.svg} />
                      <Button marginTop="auto">Find Record</Button>
                    </Card>
                  </View>
                  <Card style={styles.cardSmallStyle} onPress={navigateToGallery}>
                    <ComingSoonSVG height={65} style={styles.svg} />
                    <Button marginTop="auto">View All Forms</Button>
                  </Card>
                </View>
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
                  navigateToNewRecord={navigateToNewRecord}
                  selectedForm={selectedForm}
                  setSelectedForm={setSelectedForm}
                  puenteForms={puenteForms}
                  surveyingUser={surveyingUser}
                  surveyingOrganization={surveyingOrganization}
                  surveyee={surveyee}
                  setSurveyee={setSurveyee}
                  customForm={customForm}
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
                navigateToNewRecord={navigateToNewRecord}
                navigateToCustomForm={navigateToCustomForm}
                puenteForms={puenteForms}
                customForms={customForms}
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
                  organization={surveyingOrganization}
                  puenteForms={puenteForms}
                  navigateToNewRecord={navigateToNewRecord}
                  surveyee={surveyee}
                  setSurveyee={setSurveyee}
                  setView={setView}
                />
              </View>
            )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  screenFlexRowWrap: {
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardInfoContainer: {
    flexDirection: 'column',
    flex: 1
  },
  cardSmallStyle: {
    height: 150,
    marginHorizontal: 7,
    marginVertical: 7,
    flex: 1
  },
  horizontalLine: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10
  },
  userInfoContainer: {
    flexDirection: 'row'
  },
  mySurveysContainer: {
    width: '20%',
    marginRight: 'auto',
    marginLeft: 20
  },
  totalSurveysContainer: {
    width: '22%',
    marginLeft: 'auto',
    marginRight: 20
  },

  cardContainer: {
    flexDirection: 'row',
  },
  svg: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto'
  }
});
export default DataCollection;
