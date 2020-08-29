import * as React from 'react';
import {
  View,
  Text
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Field } from 'formik';

const PaperInput = ({ data, formikProps, ...rest }) => {
  const { label, formikKey, fieldType } = data;
  const { handleChange, handleBlur, touched, errors, setFieldValue } = formikProps;

  return (
    <>
      {fieldType === 'input' && (
        <View>
          <TextInput
            label={label}
            onChangeText={handleChange(formikKey)}
            onBlur={handleBlur(formikKey)}
            {...rest} //eslint-disable-line
          />
          <Text style={{ color: 'red' }}>
            {touched[formikKey] && errors[formikKey]}
          </Text>
        </View>
      )}
      {fieldType === 'select' && (
        <View>
          {data.options.map((result) =>
            <Button key={result} mode="contained" onPress={() => setFieldValue(formikKey, result)} >
              <Text>{result}</Text>
            </Button>
          )}
        </View>
      )}
    </>
  );
};

export default PaperInput;
