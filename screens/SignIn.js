import React from 'react';
import {
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { retrieveSignInFunction } from '../services/parse/auth';
import FormInput from '../components/FormInput';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .label('Username')
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(7, 'Seems a bit short...')
});

// export default () => (
export default function SignUp({ navigation }) {
  const handleSignUp = () => {
    navigation.navigate('Sign Up');
  };
  return (
    <SafeAreaView style={{ marginTop: 90 }}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
          retrieveSignInFunction(values.username, values.password)
            .then(() => {
              navigation.navigate('Root');
            }, () => {
              // error some sort of alert
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
            <FormInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="Password here"
              secureTextEntry
            />
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button title="Submit" onPress={formikProps.handleSubmit} />
            )}
            <Button title="Don't have an account, Sign Up!" onPress={handleSignUp} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
