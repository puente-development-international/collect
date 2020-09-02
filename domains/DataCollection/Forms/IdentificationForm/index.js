import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { postObjectsToClass } from '../../../../services/parse/crud';
import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';
import configArray from './id.config';

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

const IdentificationForm = ({ navigation }) => {
  const toRoot = () => {
    navigation.navigate('Root');
  };

  const [inputs, setInputs] = useState({});
  const [photoFile, setPhotoFile] = useState('State Photo String');

  useEffect(() => {
    setInputs(configArray);
  }, []);

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setPhotoFile('Submitted Photo String');
        const postParams = {
          parseClass: 'SurveyData',
          signature: 'Sample Signature',
          photoFile,
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
              <PaperInputPicker
                data={result}
                formikProps={formikProps}
              // placeholder="Ana"
              />
            </View>
          ))}

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

export default IdentificationForm;
