import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';

import TermsModal from '../../../components/TermsModal';
const GdprCompliance = ({
  consentForm, selectedForm, setSelectedForm
}) => {

  return (
    <View>
      <Text>Consent Form</Text>
      <Text>Data Policy (required)</Text>
      <TermsModal />
      <Text>Photo Stuff Here</Text>
      <Button mode="contained" onPress={() => setSelectedForm(consentForm)}>Continue to Form</Button>
    </View>
  )
}

export default GdprCompliance;