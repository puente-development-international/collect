// Make this render but switch between forms
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Formik } from 'formik';

import { postSupplementaryForm } from '../../../../modules/cached-resources';

import { layout } from '../../../../modules/theme';

import envConfig from './configs/envhealth.config';
import medConfig from './configs/medical-evaluation.config';
import vitalsConfig from './configs/vitals.config';
import I18n from '../../../../modules/i18n';
import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';
import yupValidationPicker from '../../../../components/FormikFields/YupValidation';
import { addSelectTextInputs, vitalsBloodPressue } from './utils';

const SupplementaryForm = ({
  navigation, selectedForm, setSelectedForm, surveyee, surveyingUser, surveyingOrganization,
  customForm
}) => {
  const [config, setConfig] = useState({});
  const [photoFile, setPhotoFile] = useState('State Photo String');
  const [validationSchema, setValidationSchema] = useState();

  const toRoot = () => {
    navigation.navigate('Root');
    setSelectedForm('');
  };

  useEffect(() => {
    if (selectedForm === 'env') {
      setConfig(envConfig);
      setValidationSchema(yupValidationPicker(envConfig.fields));
    }
    if (selectedForm === 'med-eval') {
      setConfig(medConfig);
      setValidationSchema(yupValidationPicker(medConfig.fields));
    }
    if (selectedForm === 'vitals') {
      setConfig(vitalsConfig);
      // setValidationSchema(yupValidationPicker(medConfig.fields));
    }
    if (selectedForm === 'custom') setConfig(customForm);
  }, [selectedForm, config]);

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setPhotoFile('Submitted Photo String');

        const formObject = values;
        formObject.surveyingUser = surveyingUser;
        formObject.surveyingOrganization = surveyingOrganization;

        let formObjectUpdated = addSelectTextInputs(values, formObject);
        if (selectedForm === 'vitals') {
          formObjectUpdated = vitalsBloodPressue(values, formObjectUpdated);
        }
        const postParams = {
          parseParentClassID: surveyee.objectId,
          parseParentClass: 'SurveyData',
          parseClass: config.class,
          photoFile,
          localObject: formObjectUpdated
        };

        if (selectedForm === 'custom') {
          postParams.parseClass = 'FormResults';

          const fieldsArray = Object.entries(formObjectUpdated).map((obj) => ({
            title: obj[0],
            answer: obj[1]
          }));

          postParams.localObject = {
            title: customForm.name || '',
            description: customForm.description || '',
            formSpecificationsId: customForm.objectId,
            fields: fieldsArray,
          };
        }

        postSupplementaryForm(postParams).then(() => {
          setTimeout(() => {
            actions.setSubmitting(false);
            toRoot();
          }, 1000);
        })
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <View style={layout.formContainer}>
          {config.fields && config.fields.map((result) => (
            <View key={result.formikKey}>
              <PaperInputPicker
                data={result}
                formikProps={formikProps}
                customForm={config.customForm}
              />
            </View>
          ))}

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
              <Button
                disabled={!surveyee.objectId}
                onPress={formikProps.handleSubmit}
              >
                {surveyee.objectId && <Text>{I18n.t('global.submit')}</Text>}
                {!surveyee.objectId && <Text>{I18n.t('supplementaryForms.attachResident')}</Text>}
              </Button>
            )}
        </View>
      )}
    </Formik>
  );
};

export default SupplementaryForm;
