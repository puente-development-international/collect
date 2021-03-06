import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Text } from 'react-native-paper';

import FormInput from '../../../../components/FormikFields/FormInput';
import { storeData } from '../../../../modules/async-storage';
import I18n from '../../../../modules/i18n';

const StorePinCode = ({ navigation }) => (
  <Formik
    initialValues={{ pincode: '' }}
    onSubmit={(values, actions) => {
      storeData(values.pincode, 'pincode').then(() => {
        navigation.navigate('Root');
      });

      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {(formikProps) => (
      <>
        <FormInput
          label={I18n.t('pinCode.storePinCode.enterPinCode')}
          formikProps={formikProps}
          formikKey="pincode"
          placeholder="123456"
          keyboardType="numeric"
        />
        {formikProps.isSubmitting ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={formikProps.handleSubmit}>
            <Text>{I18n.t('global.submit')}</Text>
          </Button>
        )}
      </>
    )}
  </Formik>
);

export default StorePinCode;
