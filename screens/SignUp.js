import React from 'react';
import {
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { retrieveSignUpFunction, retrieveSignInFunction } from '../services/parse/auth';

import FormInput from '../components/FormInput';

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .label('First Name')
    .required(),
  lastname: yup
    .string()
    .label('Last Name')
    .required(),
  email: yup
    .string()
    .label('Email')
    .email(),
  phonenumber: yup
    .string()
    .label('Phone Number')
    .min(10, 'Seems a bit short..')
    .required(),
  organization: yup
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
export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={{ marginTop: 90 }}>
      <Formik
        initialValues={{
          firstname: '', lastname: '', email: '', phonenumber: '', password: '', organization: ''
        }}
        onSubmit={(values, actions) => {
          retrieveSignUpFunction(values)
            .then((user) => {
              const userString = JSON.stringify(user);
              const userValues = JSON.parse(userString);
              const { username } = userValues;
              // sign user in after successful sign up
              retrieveSignInFunction(username, values.password)
                .then(() => {
                  // user signed in and signed up
                  navigation.navigate('Root');
                }, () => {
                  // sign in failed, alert user
                });
            }, () => {
              // sign up failed alert user
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
              label="First Name"
              formikProps={formikProps}
              formikKey="firstname"
              placeholder="John"
              autoFocus
            />
            <FormInput
              label="Last Name"
              formikProps={formikProps}
              formikKey="lastname"
              placeholder="Doe"
            />
            <FormInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
            />
            <FormInput
              label="Phone Number"
              formikProps={formikProps}
              formikKey="phonenumber"
              placeholder="123-456-7890"
            />
            <FormInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="Password Here"
              secureTextEntry
            />
            <FormInput
              label="Organization"
              formikProps={formikProps}
              formikKey="organization"
              placeholder="Puente"
            />
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
                <Button title="Submit" onPress={formikProps.handleSubmit} />
              )}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
