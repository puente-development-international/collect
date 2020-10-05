import * as React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import {
  TextInput, Button, Title
} from 'react-native-paper';

import AutoFill from './AutoFill';
import HouseholdManager from './HouseholdManager';

import getLocation from '../../../modules/geolocation';
import { theme, layout } from '../../../modules/theme';

const PaperInputPicker = ({
  data, formikProps, scrollViewScroll, setScrollViewScroll, ...rest
}) => {
  const { label, formikKey, fieldType } = data;
  const {
    handleChange, handleBlur, touched, errors, setFieldValue
  } = formikProps;

  const [location, setLocation] = React.useState();

  const handleLocation = async () => {
    const currentLocation = await getLocation();
    const { latitude, longitude, altitude } = currentLocation.coords;

    setFieldValue('altitude', altitude);

    if (formikKey === 'longitude') {
      setLocation(longitude);
      setFieldValue(formikKey, longitude);
      return longitude;
    }

    if (formikKey === 'latitude') {
      setLocation(latitude);
      setFieldValue(formikKey, latitude);
      return latitude;
    }

    return null;
  };

  return (
    <>
      {fieldType === 'input' && (
        <View style={styles}>
          <TextInput
            label={label}
            onChangeText={handleChange(formikKey)}
            onBlur={handleBlur(formikKey)}
            {...rest} //eslint-disable-line
            mode="outlined"
            theme={{ colors: { placeholder: theme.colors.primary }, text: 'black' }}
          />
          <Text style={{ color: 'red' }}>
            {touched[formikKey] && errors[formikKey]}
          </Text>
        </View>
      )}
      {fieldType === 'select' && (
        <View>
          <Text style={layout.selectLabel}>{label}</Text>
          <View style={layout.buttonGroupContainer}>
            {data.options.map((result) => (
              <Button
                style={layout.buttonGroupButtonStyle}
                key={result}
                mode="outlined"
                onPress={() => setFieldValue(formikKey, result)}
              >
                <Text style={{ color: theme.colors.primary }}>{result}</Text>
              </Button>
            ))}
          </View>
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
      {fieldType === 'geolocation' && (
        <View>
          <Button mode="contained" onPress={() => handleLocation()}>
            <Text>{location}</Text>
          </Button>
        </View>
      )}
      {fieldType === 'household' && (
        <View>
          <HouseholdManager
            formikProps={formikProps}
            formikKey={formikKey}
          />
        </View>
      )}
      {fieldType === 'topLabel' && (
        <View>
          <Title>{label}</Title>
          <View
            style={styles.horizontalLine}
          />
        </View>
      )}
      {fieldType === 'header' && (
        <View>
          <View
            style={styles.horizontalLine}
          />
          <Title>{label}</Title>
          <View
            style={styles.horizontalLine}
          />
        </View>
      )}
      {fieldType === 'multiInputRow' && (
        <View style={styles.container}>
          <Text>{label}</Text>
          <View style={styles.multiInputContainer}>
            {data.options.map((result) => (
              <View style={styles.inputItem}>
                <TextInput
                  label={result}
                  onChangeText={handleChange(result)}
                  onBlur={handleBlur(result)}
                  {...rest} //eslint-disable-line
                  mode="outlined"
                  theme={{ colors: { placeholder: theme.colors.primary }, text: 'black' }}
                />
                <Text style={{ color: 'red' }}>
                  {touched[result] && errors[result]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,

  },
  inputItem: {
    flex: 1,
    marginHorizontal: 5
  },
  multiInputContainer: {
    flexDirection: 'row'
  },
  container: {
    flexDirection: 'column'
  }
});
export default PaperInputPicker;
