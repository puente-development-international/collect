import React from 'react';
import {
  StyleSheet, TextInput, Button, View, Text
} from 'react-native';
import { Formik } from 'formik';
import { retrieveSignInFunction } from '../services/parse/auth';

// props should be passed in here if needed
export default function SignIn() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        // console.log(values.username);
        // console.log(values.password);
        retrieveSignInFunction(values.username, values.password);
      }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values
      }) => (
        <View style={styles.containter}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Username:</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
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
