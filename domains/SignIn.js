/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["formikProps"] }] */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Button,
  ActivityIndicator,
  View,
  StyleSheet,
  Alert,
  Modal,
  Text,
  TouchableHighlight
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import CheckBox from 'react-native-check-box';
import { retrieveSignInFunction } from '../services/parse/auth';
import FormInput from '../components/FormInput';
import { storeData, getData } from '../modules/async-storage';

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
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [load] = useState(false);

  useEffect(() => {
    getData('credentials').then((values) => {
      setUser(values);
      if (values != null) {
        setModalVisible(true);
      }
    });
  }, [load]);
  return (
    <SafeAreaView style={{ marginTop: 90 }}>
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
              label="Username"
              formikProps={formikProps}
              formikKey="username"
              placeholder="johndoe@example.com"
              autoFocus
            />
            {!showPassword ? (
              <FormInput
                label="Password"
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password here"
                secureTextEntry
              />
            ) : (
              <FormInput
                label="Password"
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password here"
              />
            )}
            <View style={styles.container}>
              <CheckBox
                onClick={() => setShowPassword(!showPassword)}
                isChecked={showPassword}
                rightText="Show Password"
              />
            </View>
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button title="Submit" onPress={formikProps.handleSubmit} />
            )}
            <Button title="Don't have an account, Sign Up!" onPress={handleSignUp} />
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Would you like to use your saved login credentials to sign in?
                  </Text>
                  <View style={styles.modalButtons}>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        formikProps.values.username = user.username;
                        formikProps.values.password = user.password;
                        formikProps.handleSubmit();
                      }}
                    >
                      <Text style={styles.textStyle}>Yes</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>No</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  modalButtons: {
    flexDirection: 'row',
    padding: 10
  }
});
