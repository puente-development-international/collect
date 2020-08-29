// Make this render but switch between forms
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { postObjectsToClass } from '../../../../services/parse/crud';
import PaperInput from '../../../../components/PaperInput';
import configArray from './config';
import AutoFill from '../../../../components/AutoFill';

// const validationSchema = yup.object().shape({
//   fname: yup
//     .string()
//     .label('First Name')
//     .required(),
//   lname: yup
//     .string()
//     .label('Last Name')
//     .required()
// });

const PatientIDForm = ({ navigation }) => {
  const toRoot = () => {
    navigation.navigate('Root');
  };

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setInputs(configArray);
  }, []);

  return (
    <Formik
      initialValues={{}}
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
    // validationSchema={validationSchema}
    >
      {(formikProps) => (
        <>
          {inputs.length && inputs.map((result) => (
            <View key={result.formikKey}>
              <PaperInput
                data={result}
                formikProps={formikProps}
              // placeholder="Ana"
              />
            </View>
          ))}

          <AutoFill
            parameter="City"
            formikProps={formikProps}
            formikKey="city"
          />
          <AutoFill
            parameter="Communities"
            formikProps={formikProps}
            formikKey="communityname"
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
