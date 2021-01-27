import { Formik } from 'formik';
import React from 'react';
import {
  ActivityIndicator, ScrollView, TextBase, View
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import PaperButton from '../../../../../components/Button';
import { stylesDefault, stylesPaper } from '../../../../../components/FormikFields/PaperInputPicker/index.style';
import I18n from '../../../../../modules/i18n';
import { layout } from '../../../../../modules/theme';
import styles from './index.styles';

const AssetCore = () => (
  <View style={styles.assetContainer}>
    <Formik
      initialValues={{}}
      onSubmit={async (values, actions) => {
        // setPhotoFile('Submitted Photo String');
        const formObject = values;
        console.log(values);
      }}
    >
      {(formikProps) => (
        <View>
          <View id="top">
            <TextInput
              label="Name of Assets"
              onChangeText={formikProps.handleChange('Name')}
              onBlur={formikProps.handleBlur('Name')}
              mode="outlined"
              theme={stylesPaper}
              style={stylesDefault.label}
            />
            <Text />
          </View>
          <View id="middle" style={{ flexDirection: 'row' }}>
            <View>
              <PaperButton
                buttonText="GPS"
              />
              <PaperButton
                buttonText="Camera"
              />
            </View>
            <ScrollView>
              <Text>Person Sroll</Text>
              <Text>Person SCroll</Text>
            </ScrollView>
          </View>
          <View id="botom">
            <TextInput
              label="Community Name"
              onChangeText={formikProps.handleChange('Community Name')}
              onBlur={formikProps.handleBlur('Community Name')}
              mode="outlined"
              theme={stylesPaper}
              style={stylesDefault.label}
            />
            <TextInput
              label="City"
              onChangeText={formikProps.handleChange('City')}
              onBlur={formikProps.handleBlur('City')}
              mode="outlined"
              theme={stylesPaper}
              style={stylesDefault.label}
            />
          </View>
          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <PaperButton
              onPressEvent={() => formikProps.handleSubmit()}
              buttonText={I18n.t('global.submit')}
            />
          )}
        </View>
      )}
    </Formik>
  </View>
);

export default AssetCore;
