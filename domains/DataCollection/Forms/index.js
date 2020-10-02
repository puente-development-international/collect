import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';

import GdprCompliance from '../GdprCompliance';
import { layout } from '../../../modules/theme';

const puenteForms = [
  {
    tag: 'id',
    name: 'Resident ID'
  },
  { tag: 'env', name: 'Environmental Health' }, { tag: 'med-eval', name: 'Medical Evaluation' }
];

const Forms = (props) => {
  const {
    navigation, scrollViewScroll, setScrollViewScroll
  } = props;

  const [selectedForm, setSelectedForm] = useState('id');
  const [consent, setConsent] = useState(false);
  const [surveyeeId, selectedSurveyeeId] = useState();

  return (
    <View style={layout.screenContainer}>
      {consent === true && selectedForm === 'id' && (
        <IdentificationForm
          navigation={navigation}
          scrollViewScroll={scrollViewScroll}
          setScrollViewScroll={setScrollViewScroll}
          setSelectedForm={setSelectedForm}
          selectedSurveyeeId={selectedSurveyeeId}
        />
      )}
      { consent === true && selectedForm !== 'id' && (
        <SupplementaryForm
          navigation={navigation}
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
          surveyeeId={surveyeeId}

        />
      )}
      {consent === false && (
        <GdprCompliance
          navigation={navigation}
          setConsent={setConsent}
        />
      )}
      {selectedForm === '' && (
        <View>
          <Text>Suggested next Forms</Text>
          <ScrollView horizontal>
            {puenteForms.map((form) => (
              <Card key={form.tag} style={screenLayout.card} onPress={() => setSelectedForm(form.tag)}>
                <Text>{form.name}</Text>
              </Card>
            ))}
          </ScrollView>
          {/* <View> <Text>View All Forms</Text></View> */}
        </View>
      )}
    </View>
  );
};

const screenLayout = StyleSheet.create({
  card: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5
  }

});

export default Forms;
