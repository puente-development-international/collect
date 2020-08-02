/* eslint-disable */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function FormInput({
  label, formikProps, formikKey, ...rest
}) {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
      <Text style={{ marginBottom: 3 }}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Text style={{ color: 'red' }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
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
  label: {
    color: '#000',
    flex: 1,
    height: 50,
    padding: 10,
    alignItems: 'flex-end'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    backgroundColor: '#fff'
  }
});
