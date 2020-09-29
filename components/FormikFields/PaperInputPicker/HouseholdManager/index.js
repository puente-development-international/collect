import React, { useState } from 'react';
import {
  View, Modal
} from 'react-native';
import {
  Button, RadioButton, Text, Appbar
} from 'react-native-paper';

import ResidentIdSearchbar from '../../../ResidentIdSearchbar';

import { theme, layout } from '../../../../modules/theme';
import { postObjectsToClass } from '../../../../services/parse/crud';

const relationships = [
  'Parent', 'Sibling', 'Grand-Parent', 'Cousin', 'Other'
];

const HouseholdManager = (props) => {
  const { formikProps, formikKey } = props;
  const { setFieldValue } = formikProps;

  const [selectPerson, setSelectPerson] = useState();
  const [, setHouseholdRelationship] = useState();
  const [modalView, setModalView] = useState('first');

  const onSubmit = () => {
    setModalView('third');
    attachToExistingHousehold();
  };

  const attachToExistingHousehold = () => {
    // set householdId (from selectPerson) on the residentIdForm
    // setFieldValue(formikKey, selectPerson.objectId);
    setFieldValue(formikKey, selectPerson.householdId);
  };

  const createNewHousehold = () => {
    // create new householdId and attach on the residentIdForm
    const postParams = {
      parseClass: 'Household',
      localObject: {
        latitude: 0,
        longitude: 0
      }
    };
    postObjectsToClass(postParams).then((result) => {
      setFieldValue(formikKey, result.id);
    });
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
            <Button style={layout.buttonGroupButtonStyle} icon="plus" mode="contained" onPress={createNewHousehold}>Household</Button>
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
