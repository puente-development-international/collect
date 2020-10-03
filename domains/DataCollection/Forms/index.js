import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';

import GdprCompliance from '../GdprCompliance';
import { layout } from '../../../modules/theme';

const puenteForms = [
  { tag: 'id', name: 'Resident ID' },
  { tag: 'env', name: 'Environmental Health' },
  { tag: 'med-eval', name: 'Medical Evaluation' }
];

const Forms = (props) => {
  const {
    navigation, scrollViewScroll, setScrollViewScroll, navigateToGallery
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
      {consent === true && selectedForm !== 'id' && selectedForm !== '' && (
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
              <Card
                key={form.tag}
                style={layout.cardSmallStyle}
                onPress={() => setSelectedForm(form.tag)}
              >
                <Text>{form.name}</Text>
              </Card>
            ))}
          </ScrollView>
          <Button onPress={navigateToGallery}>
            <Text>View Forms Gallery</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default Forms;
