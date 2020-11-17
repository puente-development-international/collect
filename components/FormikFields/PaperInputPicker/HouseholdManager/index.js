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

// const relationships = [
//   'Parent', 'Sibling', 'Grand-Parent', 'Cousin', 'Other'
// ];

const HouseholdManager = (props) => {
  const { formikProps, formikKey, surveyingOrganization } = props;
  const { setFieldValue } = formikProps;

  const [selectPerson, setSelectPerson] = useState();
  // const [, setHouseholdRelationship] = useState();
  const [modalView, setModalView] = useState('unset');
  const [householdSet, setHouseholdSet] = useState(false);

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
    setHouseholdSet(true);
  };

  return (
    <View style={layout.formContainer}>
      {modalView !== 'second' && modalView !== 'third'
        && (
          <View>
            {!householdSet && modalView !== 'zero' && (
              <RadioButton.Group
                onValueChange={(value) => { setModalView(value); }}
                value={modalView}
              >
                <RadioButton.Item label={I18n.t('householdManager.doNothing')} value="zero" />
                <RadioButton.Item label={I18n.t('householdManager.createHousehold')} value="first" />
                {modalView === 'first'
                  && <Button style={layout.buttonGroupButtonStyle} icon="plus" mode="contained" onPress={createNewHousehold}>{I18n.t('householdManager.household')}</Button>}
                <RadioButton.Item label={I18n.t('householdManager.linkIndividual')} value="second" />
              </RadioButton.Group>
            )}
            {householdSet && modalView === 'first'
              && <Text>{I18n.t('householdManager.successCreateHousehold')}</Text>}
            {modalView === 'zero' && (
              <View>
                <Text>{I18n.t('householdManager.noHousehold')}</Text>
                <Button style={{ marginTop: 10 }} onPress={() => setModalView('')}>{I18n.t('householdManager.addCreateHousehold')}</Button>
              </View>
            )}
          </View>
        )}

      {modalView === 'second' && (
        <Modal
          animationType="slide"
          visible
        >
          <Appbar.Header>
            <Appbar.BackAction onPress={() => setModalView('first')} />
            <Appbar.Content title={I18n.t('householdManager.householdManager')} subtitle="" />
          </Appbar.Header>

          <View style={styles.container}>
            <ResidentIdSearchbar
              surveyee={selectPerson}
              setSurveyee={setSelectPerson}
              surveyingOrganization={surveyingOrganization}
            />

            {/* <Text>{I18n.t('householdManager.relationshipHousehold')}</Text>
            <View style={layout.buttonGroupContainer}>
              {relationships.map((result) => (
                <Button
                  style={layout.buttonGroupButtonStyle}
                  key={result} mode="outlined"
                  onPress={() => setHouseholdRelationship(result)}>
                  <Text>{result}</Text>
                </Button>
              ))}
            </View> */}
            <Button theme={{ backgroundColor: theme.colors.primary }} style={layout.buttonGroupButtonStyle} mode="contained" onPress={onSubmit}>
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
