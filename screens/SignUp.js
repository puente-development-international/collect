import React from 'react';
import {
  StyleSheet, TextInput, Button, View, Text
} from 'react-native';
import { Formik } from 'formik';
import { retrieveSignUpFunction } from '../services/parse/auth';

// props should be passed in here if needed
export default function SignUp() {
  return (
    <Formik
      initialValues={{
        firstname: '', lastname: '', password: '', email: '', phonenumber: '', organization: ''
      }}
      onSubmit={(values) => {
        retrieveSignUpFunction(values);
      }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values
      }) => (
        <View style={styles.containter}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter First Name:</Text>
            <TextInput
              onChangeText={handleChange('firstname')}
              onBlur={handleBlur('firstname')}
              value={values.firstname}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Last Name:</Text>
            <TextInput
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Email:</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Phone Number:</Text>
            <TextInput
              onChangeText={handleChange('phonenumber')}
              onBlur={handleBlur('phonenumber')}
              value={values.phonenumber}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Password:</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Organization:</Text>
            <TextInput
              onChangeText={handleChange('organization')}
              onBlur={handleBlur('organization')}
              value={values.organization}
              style={styles.input}
            />
          </View>
          <View style={styles.button}>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10
  },
  text: {
    color: '#000',
    flex: 1,
    height: 50,
    padding: 10,
    alignItems: 'flex-end'
  },
  input: {
    flex: 1,
    backgroundColor: '#ccc',
    height: 40,
    padding: 10,
    alignItems: 'stretch'

  },
  button: {
    padding: 10
  }
});
