import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import {
  Text, Button, Title
} from 'react-native-paper';

import Demographics from './Demographics';
import Forms from './Forms';
import Household from './Housheold';
import { theme } from '../../../../modules/theme'

const ResidentPage = ({
  fname, lname, nickname, city, picture, selectPerson, setSelectPerson,
  puenteForms, navigateToNewRecord, setSurveyee, setView
}) => {
  const [pictureUrl, setPictureUrl] = useState();
  const [demographics, setDemographics] = useState(true);
  const [forms, setForms] = useState(false);
  const [household, setHousehold] = useState(false);

  useEffect(() => {
    const pic = picture;
    if (pic) {
      setPictureUrl({ uri: pic.url });
    }
  }, []);

  const showDemographics = () => {
    setForms(false);
    setHousehold(false);
    setDemographics(true);
  };

  const showForms = () => {
    setHousehold(false);
    setDemographics(false);
    setForms(true);
  };

  const showHousehold = () => {
    setForms(false);
    setDemographics(false);
    setHousehold(true);
  };
  return (
    <View>
      <View style={styles.picNameContainer}>
        <Image
          style={styles.profPic}
          source={pictureUrl}
        />
        <View style={styles.nameContainer}>
          <Title>{`${fname} ${lname}`}</Title>
          <Text style={styles.name}>{`"${nickname}"`}</Text>
          <Button
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Edit Profile
          </Button>
        </View>
      </View>
      <View
        style={styles.horizontalLine}
      />
      <View style={styles.navigationButtons}>
        <Button onPress={() => showDemographics()}>Demographics</Button>
        <Button onPress={() => showForms(true)}>Forms</Button>
        <Button onPress={() => showHousehold(true)}>Household</Button>
      </View>
      <View
        style={styles.horizontalLine}
      />
      {demographics && (
        <Demographics
          dob={selectPerson.dob}
          city={city}
          community={selectPerson.communityname}
          province={selectPerson.province}
          license={selectPerson.license}
          selectPerson={selectPerson}
        />
      )}
      {forms && (
        <Forms
          puenteForms={puenteForms}
          navigateToNewRecord={navigateToNewRecord}
          surveyee={selectPerson}
          setSurveyee={setSurveyee}
          setView={setView}
        />
      )}
      {household && (
        <Household />
      )}
      <Button onPress={() => setSelectPerson()}>go back to find records</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  profPic: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D0D0D0'
  },
  picNameContainer: {
    flexDirection: 'row',
    margin: 20
  },
  nameContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  name: {
    color: '#696969'
  },
  button: {
    width: 120,
    marginLeft: -5
  },
  buttonContent: {
    marginLeft: 0
  },
  horizontalLine: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
  },
  navigationButtons: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5

  }
});

export default ResidentPage;
