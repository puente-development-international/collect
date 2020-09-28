import React, { useState } from 'react';
import {
  View, Modal
} from 'react-native';
import {
  Button, RadioButton, Text, Appbar
} from 'react-native-paper';

import ResidentIdSearchbar from '../../../ResidentIdSearchbar';

import { theme, layout } from '../../../../modules/theme';

const relationships = [
  'Parent', 'Sibling', 'Grand-Parent', 'Cousin', 'Other'
];

const HouseholdManager = (props) => {
  const {
    formikProps, formikKey
  } = props;
  const { setFieldValue } = formikProps;

  const [selectPerson, setSelectPerson] = useState();
  const [householdRelationship, setHouseholdRelationship] = useState();
  const [modalView, setModalView] = useState('first');

  const onSubmit = () => {
    setModalView('third');
    console.log(selectPerson);
  };

  const attachToExistingHousehold = () => {
    // set householdId (from selectPerson) on the patientId
    // setFieldValue(formikKey, result)
  };

  const createNewHousehold = () => {
    // create new householdId and attach on the patientId
    // setFieldValue(formikKey, result)

  };

  return (
    <View style={layout.formContainer}>
      {modalView === 'first'
        && (
          <View>
            <RadioButton.Group onValueChange={(value) => setModalView(value)} value={modalView}>
              <RadioButton.Item label="Create a new household" value="first" />
              <RadioButton.Item label="Link this individual to an existing house" value="second" />
            </RadioButton.Group>
          </View>
        )}
      {modalView === 'second'
        && (
          <Modal
            animationType="slide"
            visible
          >
            <Appbar.Header>
              <Appbar.BackAction onPress={() => setModalView('first')} />
              <Appbar.Content title="Household Manager" subtitle="" />
            </Appbar.Header>
            <ResidentIdSearchbar
              selectPerson={selectPerson}
              setSelectPerson={setSelectPerson}
            />
            <Text>What is their role/relationship in the household?</Text>
            <View style={layout.buttonGroupContainer}>
              {relationships.map((result) => (
                <Button style={layout.buttonGroupButtonStyle} key={result} mode="outlined" onPress={() => setHouseholdRelationship(result)}>
                  <Text>{result}</Text>
                </Button>
              ))}
            </View>
            <Button theme={{ backgroundColor: theme.colors.primary }} style={layout.buttonGroupButtonStyle} mode="contained" onPress={onSubmit}>
              <Text>Submit</Text>
            </Button>
          </Modal>
        )}
      {modalView === 'third'
        && (
          <View>
            <RadioButton.Group onValueChange={(value) => setModalView(value)} value={modalView}>
              <RadioButton.Item label="Linked" value="third" />
            </RadioButton.Group>
          </View>
        )}
    </View>
  );
};

export default HouseholdManager;
