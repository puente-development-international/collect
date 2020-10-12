// Make this render but switch between forms
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';

import { postObjectsToClassWithRelation } from '../../../../services/parse/crud';

import { layout } from '../../../../modules/theme';

import envConfig from './configs/envhealth.config';
import medConfig from './configs/medical-evaluation.config';

import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';

const SupplementaryForm = ({
  navigation, selectedForm, setSelectedForm, surveyee, surveyingUser,
  customForm
}) => {
  const [config, setConfig] = useState({});
  const [photoFile, setPhotoFile] = useState('State Photo String');

  const toRoot = () => {
    navigation.navigate('Root');
    setSelectedForm('');
  };

  useEffect(() => {
    if (selectedForm === 'env') setConfig(envConfig);
    if (selectedForm === 'med-eval') setConfig(medConfig);
    if (selectedForm === 'custom') setConfig(customForm);
  }, [selectedForm, config]);

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setPhotoFile('Submitted Photo String');
        const formObject = values;
        formObject.surveyingUser = surveyingUser;
        const postParams = {
          parseParentClassID: surveyee.objectId,
          parseParentClass: 'SurveyData',
          parseClass: config.class,
          photoFile,
          localObject: formObject
        };

        postObjectsToClassWithRelation(postParams)
          .then(() => {
            toRoot();
          }, () => {
          });
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(formikProps) => (
        <View style={layout.formContainer}>
          {config.fields && config.fields.map((result) => (
            <View key={result.formikKey}>
              <PaperInputPicker
                data={result}
                formikProps={formikProps}
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
        </View>
      )}
    </Formik>
  );
};

export default SupplementaryForm;
