import * as React from 'react';
import {
  View,
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';

const PaperInput = (props) => {
  const {
    label, formikProps, formikKey, ...rest
  } = props;

  return (
    <View>
      <TextInput
        label={label}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Text style={{ color: 'red' }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
  );
};

export default PaperInput;
