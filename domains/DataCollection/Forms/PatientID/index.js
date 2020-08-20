// Make this render but switch between forms

import React from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { postObjectsToClass } from '../../../../services/parse/crud';
import PaperInput from '../../../../components/PaperInput';

const formValues = {
  fname: '',
  lname: '',
  relationship: '',
  relationship_id: '',
  nickname: '',
  dob: '',
  sex: '',
  telephoneNumber: '',
  marriageStatus: '',
  familyRelationships: '',
  occupation: '',
  educationLevel: '',
  communityname: '',
  city: '',
  province: '',
  insuranceNumber: '',
  insuranceProvider: '',
  clinicProvider: '',
  cedulaNumber: '',
  latitude: 0,
  longitude: 0,
  surveyingUser: 'Test',
  surveyingOrganization: 'Test'
};

const validationSchema = yup.object().shape({
  fname: yup
    .string()
    .label('First Name')
    .required(),
  lname: yup
    .string()
    .label('Last Name')
    .required()
  // .min(4, 'Seems a bit short...')
});

const PatientIDForm = ({ navigation }) => {
  const toRoot = () => {
    navigation.navigate('Root');
  };
  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values, actions) => {
        const postParams = {
          parseClass: 'SurveyData',
          signature: 'Sample Signature',
          photoFile: 'TestPicture',
          localObject: values
        };

        postObjectsToClass(postParams)
          .then(() => {
            toRoot(); // This does nothing because we're already at root
          }, () => {
          });
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <>
          <PaperInput
            label="First Name"
            formikProps={formikProps}
            formikKey="fname"
            placeholder="Ana"
          />
          <PaperInput
            label="Last Name"
            formikProps={formikProps}
            formikKey="lname"
            placeholder="Bray"
            autoFocus
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
};

export default PatientIDForm;
