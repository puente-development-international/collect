import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
import FormInput from '../../../components/FormInput';
import { getData } from '../../../modules/async-storage';

const GetPinCode = ({ navigation }) => (
  <Formik
    initialValues={{ pincode: '' }}
    onSubmit={(values, actions) => {
      getData('pincode').then((pincode) => {
        if (values.pincode === pincode) {
          navigation.navigate('Root');
        } else {
          alert('Invalid pincode, please try again'); // eslint-disable-line
        }
      });

      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {(formikProps) => (
      <>
        <FormInput
          label="Enter Pincode"
          formikProps={formikProps}
          formikKey="pincode"
          placeholder="123456"
          keyboardType="numeric"
        />
        {formikProps.isSubmitting ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={formikProps.handleSubmit}>
            <Text>Submit</Text>
          </Button>
        )}
      </>
    )}
  </Formik>
);

export default GetPinCode;
