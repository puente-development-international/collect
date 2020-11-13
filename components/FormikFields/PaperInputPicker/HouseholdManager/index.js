import React, { useState } from 'react';
import {
  View, Modal
} from 'react-native';
import {
  Button, RadioButton, Appbar, Text
} from 'react-native-paper';

import ResidentIdSearchbar from '../../../ResidentIdSearchbar';

import { theme, layout } from '../../../../modules/theme';
import I18n from '../../../../modules/i18n';

import { postObjectsToClass } from '../../../../services/parse/crud';

import styles from './index.style';


const HouseholdManager = (props) => {
  const { formikProps, formikKey, surveyingOrganization } = props;
  const { setFieldValue } = formikProps;
  const [relationships] = useState([
    'Parent', 'Sibling', 'Grand-Parent', 'Cousin', 'Other'
  ]);
  const [relationship, setRelationship] = useState('')
  const [selectPerson, setSelectPerson] = useState();
  // const [, setHouseholdRelationship] = useState();
  const [modalView, setModalView] = useState('zero');

  const onSubmit = () => {
    setModalView('third');
    attachToExistingHousehold();
  };

  const attachToExistingHousehold = () => {
    // set householdId (from selectPerson) on the residentIdForm
    setFieldValue(formikKey, selectPerson.householdId || 'No Household Id Found');
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
      {modalView !== 'second' && modalView !== 'third'
        && (
          <View>
            <RadioButton.Group onValueChange={(value) => setModalView(value)} value={modalView}>
              <RadioButton.Item label="Do Nothing" value="zero" />
              <RadioButton.Item label={I18n.t('householdManager.createHousehold')} value="first" />
              {modalView === 'first'
                && <Button style={layout.buttonGroupButtonStyle} icon="plus" mode="contained" onPress={createNewHousehold}>{I18n.t('householdManager.household')}</Button>}
              <RadioButton.Item label={I18n.t('householdManager.linkIndividual')} value="second" />
            </RadioButton.Group>
          </View>
        )}

      {modalView === 'second' && (
        <Modal
          animationType="slide"
          visible
        >
          <Appbar.Header style={{ backgroundColor: theme.colors.accent }}>
            <Appbar.BackAction onPress={() => setModalView('first')} />
            <Appbar.Content title={I18n.t('householdManager.householdManager')} subtitle="" titleStyle={{ fontSize: 20, fontWeight: 'bold' }} />
          </Appbar.Header>

          <View style={styles.container}>
            <ResidentIdSearchbar
              surveyee={selectPerson}
              setSurveyee={setSelectPerson}
              surveyingOrganization={surveyingOrganization}
            />

            <Text>{I18n.t('householdManager.relationshipHousehold')}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {relationships.map((result) => (
                // <Button
                //   style={layout.buttonGroupButtonStyle}
                //   key={result} mode="outlined"
                //   onPress={() => setHouseholdRelationship(result)}>
                //   <Text>{result}</Text>
                // </Button>
                <View key={result} style={layout.buttonGroupButtonStyle}>
                  {relationship === result ? (
                    <Button mode='contained'>{result}</Button>
                  ) : (
                      <Button mode='outlined' onPress={() => setRelationship(result)}>{result}</Button>
                    )}
                </View>
              ))}
            </View>
            <Button theme={{ backgroundColor: theme.colors.primary }} mode="contained" onPress={onSubmit}>
              {I18n.t('global.submit')}
            </Button>
          </View>
        </Modal>
      )}
      {modalView === 'third' && (
        <View>
          <RadioButton.Group onValueChange={(value) => setModalView(value)} value={modalView}>
            <RadioButton.Item label={I18n.t('householdManager.linked')} value="third" />
          </RadioButton.Group>
        </View>
      )}
    </View>
  );
};

export default HouseholdManager;
