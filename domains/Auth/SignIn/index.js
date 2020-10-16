/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["formikProps"] }] */
import React, {
  useState, useEffect
} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Checkbox, Button, Text
} from 'react-native-paper';

import * as Network from 'expo-network';

import { Formik } from 'formik';
import * as yup from 'yup';

import { retrieveSignInFunction, retrieveCurrentUserFunction } from '../../../services/parse/auth';

import { storeData, getData, deleteData } from '../../../modules/async-storage';
import I18n from '../../../modules/i18n';
import { theme } from '../../../modules/theme';

import FormInput from '../../../components/FormikFields/FormInput';
import LanguagePicker from '../../../components/LanguagePicker';
import CredentialsModal from './CredentialsModal';
import TermsModal from '../../../components/TermsModal';
// components/FormikFields/PaperInputPicker';
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

const SignIn = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');
  const [visible, setVisible] = useState(false);

  const load = false;

  useEffect(() => {
    getData('credentials').then((values) => {
      setUser(values);
      if (values != null) {
        setModalVisible(true);
      }
    });
  }, [load]);

  const handleFailedAttempt = (err) => {
    const errorMsg = err.toString().slice(-26) || '';
    Alert.alert(
      `${errorMsg}`,
      'Your username or password may be incorrect, please try again.',
      { cancelable: true }
    );
  };
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
          onPress: () => {
            storeData(values, 'credentials');
            navigation.navigate('StorePincode');
          }
        },
        { text: 'No', style: 'cancel' },
      ],
      { cancelable: false }
      // clicking out side of alert will not cancel
    );
  };

  const handleLanguage = (lang) => {
    setLanguage({
      lang
    });
    I18n.locale = lang;
  };

  const handleTermsModal = () => {
    setVisible(true);
  };

  async function checkOnlineStatus() {
    const status = await Network.getNetworkStateAsync();
    const { isConnected } = status;
    return isConnected;
  }
  const deleteCreds = () => {
    deleteData('credentials');
  };

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.accent, flex: 1 }}>
      <LanguagePicker language={language} onChangeLanguage={handleLanguage} />
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
          checkOnlineStatus().then((connected) => {
            if (connected) {
              retrieveSignInFunction(values.username, values.password)
                .then(() => {
                  getData('credentials')
                    .then((userCreds) => {
                      // credentials saved do not match those entered, overwrite saved credentials
                      if (userCreds === null || values.username !== userCreds.username
                        || values.password !== userCreds.password) {
                        // Store user organization
                        const currentUser = retrieveCurrentUserFunction();
                        getData('organization').then((organization) => {
                          if (organization !== currentUser.organization) {
                            storeData(currentUser.organization, 'organization');
                          }
                          handleSaveCredentials(values);
                        });
                      } else {
                        const currentUser = retrieveCurrentUserFunction();
                        getData('organization').then((organization) => {
                          if (organization !== currentUser.organization) {
                            storeData(currentUser.organization, 'organization');
                          }
                        });
                      }
                    }, () => {
                      // Store user organization
                      const currentUser = retrieveCurrentUserFunction();
                      getData('organization').then((organization) => {
                        if (organization !== currentUser.organization) {
                          storeData(currentUser.organization, 'organization');
                        }
                      });
                      // no credentials saved, give option to save
                      handleSaveCredentials(values);
                    });
                  navigation.navigate('Root');
                }, (err) => {
                  handleFailedAttempt(err);
                });
            } else {
              // offline
              getData('credentials')
                .then((userCreds) => {
                  // username and password entered (or saved in creds) match the saved cred
                  if (values.username === userCreds.username
                    && values.password === userCreds.password) {
                    // need some pincode verification
                    navigation.navigate('Root');
                  } else {
                    // cannot log in offline without saved credentials, must connect to internet
                  }
                });
            }
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
              label={I18n.t('signIn.username')}
              formikProps={formikProps}
              formikKey="username"
              placeholder="johndoe@example.com"
              autoFocus
            />
            <Button style={{ marginRight: 'auto' }}>Forgot username?</Button>
            {!checked ? (
              <FormInput
                label={I18n.t('signIn.password')}
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
                secureTextEntry
              />
            ) : (
              <FormInput
                label={I18n.t('signIn.password')}
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
              />
            )}
            <Button style={{ marginRight: 'auto' }}>Forgot password?</Button>
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
              <Text style={styles.passwordText}>{I18n.t('signIn.showPassword')}</Text>
            </View>
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button mode="contained" theme={theme} style={styles.submitButton} onPress={formikProps.handleSubmit}>Log-In</Button>
            )}
            <CredentialsModal
              modalVisible={modalVisible}
              formikProps={formikProps}
              user={user}
              setModalVisible={setModalVisible}
              navigation={navigation}
            />

          </>
        )}
      </Formik>
      <Button onPress={deleteCreds}>Delete Credentials</Button>
      <View style={styles.footer}>
        <View style={styles.termsContainer}>
          <Text style={styles.accountText}>Don&apos;t have an account?</Text>
          <Button mode="text" theme={theme} color="#3E81FD" onPress={handleSignUp}>
            Sign up!
          </Button>
        </View>
        <View style={styles.termsContainer}>
          <Text style={styles.puenteText}>Puente 2020   |</Text>
          <Button mode="text" theme={theme} onPress={handleTermsModal}>Terms & Conditions</Button>
        </View>
      </View>
      <TermsModal visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

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
    marginLeft: 0,
    backgroundColor: 'white'
  },
  submitButton: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  footer: {
    marginTop: 200,
  },
  termsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  puenteText: {
    fontSize: 15,
    marginTop: 'auto',
    marginBottom: 'auto'

  },
  accountText: {
    fontSize: 18,
    marginTop: 'auto',
    marginBottom: 'auto'
  }

});

export default SignIn;
