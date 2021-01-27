import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import I18n from '../../../../../modules/i18n';
import { layout } from '../../../../../modules/theme';
import styles from './index.styles';
import SelectedAsset from './SelectedAsset';

const AssetSupplementary = () => (
  <Formik
    initialValues={{}}
    onSubmit={async (values, actions) => {
      setPhotoFile('Submitted Photo String');

      const formObject = values;
      // formObject.surveyingOrganization = surveyingOrganization;
      // formObject.surveyingUser = await surveyingUserFailsafe(surveyingUser, isEmpty);

      // formObject.latitude = values.location?.latitude || 0;
      // formObject.longitude = values.location?.longitude || 0;
      // formObject.altitude = values.location?.altitude || 0;

      // const submitAction = () => {
      //   setTimeout(() => {
      //     actions.setSubmitting(false);
      //   }, 1000);
      //   setSelectedForm('');
      // };

      // const postParams = {
      //   parseClass: 'SurveyData',
      //   signature: 'Sample Signature',
      //   photoFile,
      //   localObject: formObject
      // };

      // postIdentificationForm(postParams).then((surveyee) => {
      //   setSurveyee(surveyee);
      //   submitAction();
      // });
    }}
  >
    {(formikProps) => (
      <View>
        <View>
          <SelectedAsset />
          <Button compact mode="contained">Plus Button for Attaching New Forms</Button>
        </View>
        <View>
          <View style={layout.formContainer}>

            {/* {inputs.length && inputs.map((result) => (
              <View key={result.formikKey}>
                <PaperInputPicker
                  data={result}
                  formikProps={formikProps}
                  surveyingOrganization={surveyingOrganization}
                  scrollViewScroll={scrollViewScroll}
                  setScrollViewScroll={setScrollViewScroll}
                  customForm={false}
                />
              </View>
            ))} */}
            <Text>AssetSupplementary</Text>
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button
                onPressEvent={formikProps.handleSubmit}
                buttonText={I18n.t('global.submit')}
              />
            )}
          </View>
        </View>
      </View>
    )}
  </Formik>
);

export default AssetSupplementary;
