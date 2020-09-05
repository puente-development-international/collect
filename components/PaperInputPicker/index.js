import * as React from 'react';
import {
  View,
  Text
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import AutoFill from '../AutoFill';

const PaperInputPicker = ({ data, formikProps, scrollViewScroll, setScrollViewScroll, ...rest }) => {
  const { label, formikKey, fieldType } = data;
  const {
    handleChange, handleBlur, touched, errors, setFieldValue
  } = formikProps;

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
          {data.options.map((result) => (
            <Button key={result} mode="contained" onPress={() => setFieldValue(formikKey, result)}>
              <Text>{result}</Text>
            </Button>
          ))}
        </View>
      )}
      {fieldType === 'autofill' && (
        <View>
          <AutoFill
            parameter={data.parameter}
            formikProps={formikProps}
            formikKey={formikKey}
            scrollViewScroll={scrollViewScroll}
            setScrollViewScroll={setScrollViewScroll}
          />
        </View>
      )}
    </>
  );
};

export default PaperInputPicker;
