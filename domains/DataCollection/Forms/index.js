import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';

import GdprCompliance from '../GdprCompliance';
import { layout } from '../../../modules/theme';

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
      { consent === true && selectedForm === 'env' && (
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
          <Card onPress={() => setSelectedForm('id')}>
            <Card.Title title="Resident ID" subtitle="" />
          </Card>
          <Card onPress={() => setSelectedForm('env')}>
            <Card.Title title="Environmental History" subtitle="" />
          </Card>
          <View>View All Forms</View>
        </View>
      )}
    </View>
  );
};

export default Forms;
