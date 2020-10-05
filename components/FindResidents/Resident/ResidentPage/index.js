import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text, TextInput, Button, Title
} from 'react-native-paper';

import { theme } from '../../../../modules/theme';
import Demographics from './Demographics';
import Forms from './Forms';
import Household from './Housheold';


const ResidentPage = ({
  fname, lname, nickname, city, picture, license, selectPerson, setSelectPerson, puenteForms, navigateToNewRecord
}) => {

  const [pictureUrl, setPictureUrl] = useState();
  const [demographics, setDemographics] = useState(true);
  const [forms, setForms] = useState(false);
  const [household, setHousehold] = useState(false);

  useEffect(() => {
    const pic = picture;
    console.log(picture)
    if (pic) {
      setPictureUrl({ uri: pic.url });
      console.log('picture', pictureUrl);
    }
  }, []);

  const showDemographics = () => {
    setForms(false);
    setHousehold(false);
    setDemographics(true);
  }

  const showForms = () => {
    setHousehold(false);
    setDemographics(false);
    setForms(true);
  }

  const showHousehold = () => {
    setForms(false);
    setDemographics(false);
    setHousehold(true);
  }
  return (
    <View>
      <View style={styles.picNameContainer}>
        <Image
          style={styles.profPic}
          source={pictureUrl}
        />
        <View style={styles.nameContainer}>
          <Title>{fname + ' ' + lname}</Title>
          <Text style={styles.name}>{'"' + nickname + '"'}</Text>
          <Button compact={true} style={styles.button} contentStyle={styles.buttonContent} onPress={() => console.log('')}>Edit Profile</Button>
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
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5
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
