import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { Formik } from 'formik';
// import * as yup from 'yup';

import { postIdentificationForm } from '../../../../modules/cached-resources';
import { layout } from '../../../../modules/theme';
import PaperButton from '../../../../components/Button';

import backgroundPostPatient from './utils';
import configArray from './config/config';

import I18n from '../../../../modules/i18n';
import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';
import yupValidationPicker from '../../../../components/FormikFields/YupValidation';

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

const IdentificationForm = ({
  scrollViewScroll, setScrollViewScroll,
  setSelectedForm, setSurveyee, surveyingOrganization, surveyingUser
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      backgroundPostPatient();
    }, 10000);

    setValidationSchema(yupValidationPicker(configArray));

    return () => {
      clearInterval(interval);
    };
  }, [clearInterval]);

  const [inputs, setInputs] = useState({});
  const [photoFile, setPhotoFile] = useState('State Photo String');
  const [validationSchema, setValidationSchema] = useState();

  useEffect(() => {
    setInputs(configArray);
  }, [setInputs, configArray]);

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            setPhotoFile('Submitted Photo String');

            const formObject = values;
            formObject.surveyingOrganization = surveyingOrganization;
            formObject.surveyingUser = surveyingUser;
            formObject.latitude = values.location?.latitude || 0;
            formObject.longitude = values.location?.longitude || 0;
            formObject.altitude = values.location?.altitude || 0;

            formObject.dob = `${values.Month || '00'}/${values.Day || '00'}/${values.Year || '0000'}`;

            const valuesToPrune = ['Month', 'Day', 'Year', 'location'];
            valuesToPrune.forEach((value) => {
              delete formObject[value];
            });

            const submitAction = () => {
              setTimeout(() => {
                setSelectedForm('');
                actions.setSubmitting(false);
              }, 1000);
            };

            const postParams = {
              parseClass: 'SurveyData',
              signature: 'Sample Signature',
              photoFile,
              localObject: formObject
            };

            postIdentificationForm(postParams, setSurveyee, submitAction)
          }}
          validationSchema={validationSchema}
          // only validate on submit, errors persist after fixing
          validateOnBlur={false}
          validateOnChange={false}
        >
          {(formikProps) => (
            <View style={layout.formContainer}>
              {inputs.length && inputs.map((result) => (
                <View key={result.formikKey}>
                  <PaperInputPicker
                    data={result}
                    formikProps={formikProps}
                    surveyingOrganization={surveyingOrganization}
                    scrollViewScroll={scrollViewScroll}
                    setScrollViewScroll={setScrollViewScroll}
                    customForm={false}
                  // placeholder="Ana"
                  />
                </View>
              ))}
              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                  <PaperButton
                    onPressEvent={formikProps.handleSubmit}
                    buttonText={I18n.t('global.submit')}
                  />
                  // <Button icon="human" onPress={formikProps.handleSubmit}>
                  //   <Text>Submit</Text>
                  // </Button>
                )}
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default IdentificationForm;
