import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';

import GdprCompliance from '../GdprCompliance';
import { layout } from '../../../modules/theme';

const Forms = (props) => {
  const {
    navigation, selectedForm, setSelectedForm, scrollViewScroll, setScrollViewScroll,
    consentForm, setConsentForm
  } = props;

  const getConsent = (form) => {
    setConsentForm(form);
    setSelectedForm('gdpr');

  }
  return (
    <View style={layout.screenContainer}>
      {selectedForm === 'id' && (
        <IdentificationForm
          navigation={navigation}
          scrollViewScroll={scrollViewScroll}
          setScrollViewScroll={setScrollViewScroll}
          setSelectedForm={setSelectedForm}
        />
      )}
      {selectedForm === 'env' && (
        <SupplementaryForm
          navigation={navigation}
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}

        />
      )}
      {selectedForm === 'gdpr' && (
        <GdprCompliance
          navigation={navigation}
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
          consentForm={consentForm}
        />
      )
      }
      {selectedForm === '' && (
        <View>
          <Text>Suggested next Forms</Text>
          <Card onPress={() => getConsent('id')}>
            <Card.Title title="Resident ID" subtitle="" />
          </Card>
          <Card onPress={() => getConsent('env')}>
            <Card.Title title="Environmental History" subtitle="" />
          </Card>
        </View>
      )}
    </View>
  );
};

export default Forms;
