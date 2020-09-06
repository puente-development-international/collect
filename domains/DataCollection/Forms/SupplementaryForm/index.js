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
import {
  storeData
} from '../../../../modules/async-storage';
import checkOnlineStatus from '../../../../modules/offline';
import backgroundPostPatient from './utils';
import generateRandomID from '../../../../modules/utils';
import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';
import envArray from './forms-configs/envhealth.config';

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

const SupplementaryForm = ({ navigation, scrollViewScroll, setScrollViewScroll }) => {
  // similar to componentDidMount and componenetWillUnmount
  // runs every 10 seconds in the background to get all Async Data
  useEffect(() => {
    const interval = setInterval(() => {
      backgroundPostPatient();
      toRoot();
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toRoot = () => {
    navigation.navigate('Root');
  };

  const [inputs, setInputs] = useState({});
  const [photoFile, setPhotoFile] = useState('State Photo String');

  useEffect(() => {
    setInputs(envArray);
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

        checkOnlineStatus().then((connected) => {
          if (connected) {
            postObjectsToClass(postParams)
              .then(() => {
                toRoot(); // This does nothing because we're already at root
              }, () => {
              });
          } else {
            const id = `PatientID-${generateRandomID()}`;
            storeData(postParams, id);
          }
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
                scrollViewScroll={scrollViewScroll}
                setScrollViewScroll={setScrollViewScroll}
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

export default SupplementaryForm;
