// Make this render but switch between forms
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
// import * as yup from 'yup';
import * as Network from 'expo-network';
import { postObjectsToClass } from '../../../../services/parse/crud';
import PaperInputPicker from '../../../../components/PaperInputPicker';
import configArray from './config';
import {
  storeData, getData, getAllData, deleteData
} from '../../../../modules/async-storage';

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
  // similar to componentDidMount and componenetWillUnmount
  // runs every 10 seconds in the background to get all Async Data
  useEffect(() => {
    const interval = setInterval(() => {
      checkOnlineStatus()
        .then((isConnected) => {
          if (isConnected) {
            getAllData().then((allAsyncData) => {
              // contains all the available keys
              const allKeys = allAsyncData.map((a) => a[0]);
              allKeys.forEach((item) => {
                if (item.includes('PatientID-')) {
                  getData(item)
                    .then((postParams) => {
                      postObjectsToClass(postParams)
                        .then(() => {
                          deleteData(item);
                          toRoot();
                        }, () => {
                        });
                    });
                }
              });
            });
          }
        });
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toRoot = () => {
    navigation.navigate('Root');
  };

  const generateRandomID = () => Math.random().toString(20).substr(2, 12);

  // checks whether user is connected to internet, return true if connected, false otherwise
  // maybe on componentDidMount calling this function and then create another function to upload
  // the objects and delete them afterwards. NEEDs to BE FLESHED OUT
  async function checkOnlineStatus() {
    const status = await Network.getNetworkStateAsync();
    const { isConnected } = status;
    return isConnected;
  }
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

export default PatientIDForm;
