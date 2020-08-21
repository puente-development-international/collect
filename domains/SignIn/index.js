/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["formikProps"] }] */
import React, {
  useContext, useState, useEffect
} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import {
  Checkbox, Button,
} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { retrieveSignInFunction } from '../../services/parse/auth';
import FormInput from '../../components/FormInput';
import CredentialsModal from './CredentialsModal';
import { storeData, getData } from '../../modules/async-storage';

// STYLING
import theme from '../../modules/theme';
// Languages
import { LocalizationContext } from '../../App';
import '../../locales/English/en.json';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .label('Username')
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(4, 'Seems a bit short...')
});

// export default () => (
export default function SignIn({ navigation }) {
  const handleSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const handleSaveCredentials = (values) => {
    Alert.alert(
      'Credentials',
      'Would you like to save your login credentials for future use?',
      [
        {
          text: 'Yes',
          onPress: () => storeData(values, 'credentials')
        },
        { text: 'No', style: 'cancel' },
      ],
      { cancelable: false }
      // clicking out side of alert will not cancel
    );
  };

  const [checked, setChecked] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [load] = useState(false);

  const { t } = useContext(LocalizationContext);

  useEffect(() => {
    getData('credentials').then((values) => {
      setUser(values);
      if (values != null) {
        setModalVisible(true);
      }
    });
  }, [load]);
  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
          retrieveSignInFunction(values.username, values.password)
            .then(() => {
              getData('credentials')
                .then((userCreds) => {
                  // credentials saved do not match those entered, overwrite saved credentials
                  if (userCreds === null || values.username !== userCreds.username
                    || values.password !== userCreds.password) {
                    handleSaveCredentials(values);
                  }
                }, () => {
                  // no credentials saved, give option to save
                  handleSaveCredentials(values);
                });
              navigation.navigate('Root');
            }, () => {
              // error on sign in => some sort of alert
            });
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <>
            <FormInput
              label={t('signIn.username')}
              formikProps={formikProps}
              formikKey="username"
              placeholder="johndoe@example.com"
              autoFocus
            />
            {!checked ? (
              <FormInput
                label={t('signIn.password')}
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password here"
                secureTextEntry
              />
            ) : (
              <FormInput
                label={t('signIn.password')}
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password here"
              />
            )}
            <View style={styles.container}>
              <View style={styles.checkbox}>
                <Checkbox
                  disabled={false}
                  theme={theme}
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <Text style={styles.passwordText}>{t('signIn.showPassword')}</Text>
            </View>
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button mode="contained" theme={theme} style={styles.submitButton} onPress={formikProps.handleSubmit}>{t('signIn.submit')}</Button>
            )}
            <Button mode="text" theme={theme} color="#3E81FD" onPress={handleSignUp}>
              {t('signIn.signUpLink')}
            </Button>
            <CredentialsModal
              modalVisible={modalVisible}
              formikProps={formikProps}
              user={user}
              setModalVisible={setModalVisible}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    flexDirection: 'row'
  },
  passwordText: {
    flex: 10,
    fontSize: 15,
    marginLeft: 10
  },
  checkbox: {
    flex: 1,
    borderRadius: 5,
    marginLeft: 20,
    backgroundColor: 'white'
  },
  submitButton: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
  },
});
