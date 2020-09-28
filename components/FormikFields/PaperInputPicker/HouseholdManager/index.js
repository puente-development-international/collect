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
  'Parent',
  'Sibling',
  'Grand-Parent',
  'Cousin',
  'Other'
];

const HouseholdManager = (props) => {
  const {
    formikProps, formikKey
  } = props;

  const [selectPerson, setSelectPerson] = useState();
  const [modalView, setModalView] = useState(false);

  return (
    <View style={layout.formContainer}>
      {!modalView
        && (
          <View>
            <RadioButton.Group onValueChange={(value) => setModalView(value)} value={modalView}>
              <View>
                <Text>Yes, create a new household</Text>
                <RadioButton value={false} />
              </View>
              <View>
                <Text>No, link this individual to an existing house</Text>
                <RadioButton value />
              </View>
            </RadioButton.Group>
          </View>
        )}
      {modalView
        && (
          <Modal
            animationType="slide"
            visible
          >
            <Appbar.Header>
              <Appbar.BackAction onPress={() => setModalView(false)} />
              <Appbar.Content title="Household Manager" subtitle="Choose household members" />
            </Appbar.Header>
            <ResidentIdSearchbar
              selectPerson={selectPerson}
              setSelectPerson={setSelectPerson}
            />
            <Text>What is their relationship?</Text>
            <View style={layout.buttonGroupContainer}>
              {relationships.map((result) => (
                <Button style={layout.buttonGroupButtonStyle} key={result} mode="outlined" onPress={() => formikProps.setFieldValue(formikKey, result)}>
                  <Text>{result}</Text>
                </Button>
              ))}
            </View>
            <Button theme={{ backgroundColor: theme.colors.primary }} style={layout.buttonGroupButtonStyle} mode="contained" onPress={() => setModalView(false)}>
              <Text>Submit</Text>
            </Button>
          </Modal>
        )}
    </View>
  );
};

export default HouseholdManager;
