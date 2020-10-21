import * as React from 'react';
import {
  View, Text
} from 'react-native';
import {
  TextInput, Button, Headline
} from 'react-native-paper';

import AutoFill from './AutoFill';
import HouseholdManager from './HouseholdManager';

import getLocation from '../../../modules/geolocation';
import PaperButton from '../../Button';

import { theme, layout } from '../../../modules/theme';
import styles from './index.style';

const PaperInputPicker = ({
  data, formikProps, scrollViewScroll, setScrollViewScroll, surveyingOrganization, ...rest
}) => {
  const { label, formikKey, fieldType } = data;
  const {
    handleChange, handleBlur, touched, errors, setFieldValue, values
  } = formikProps;

  const [location, setLocation] = React.useState();

  const handleLocation = async () => {
    const currentLocation = await getLocation();
    const { latitude, longitude, altitude } = currentLocation.coords;

    setFieldValue('altitude', altitude);
    // setFieldValue('longitude', longitude);
    // setFieldValue('latitude', latitude);
    // setLocation({ 'latitude': latitude, 'longitude': longitude })

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
      {fieldType === 'numberInput' && (
        <View style={styles}>
          <TextInput
            label={label}
            onChangeText={handleChange(formikKey)}
            onBlur={handleBlur(formikKey)}
            {...rest} //eslint-disable-line
            mode="outlined"
            keyboardType="numeric"
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
              <View>
                {/* selected value */}
                {result.value === values[formikKey] && (
                  <Button
                    style={layout.buttonGroupButtonStyle}
                    key={result.value}
                    mode="contained"
                    onPress={() => setFieldValue(formikKey, result.value)}
                  >
                    <Text style={{ color: 'white' }}>{result.label}</Text>
                  </Button>
                )}
                {/* non-selected value */}
                {result.value !== values[formikKey] && (
                  <Button
                    style={layout.buttonGroupButtonStyle}
                    key={result.value}
                    mode="outlined"
                    onPress={() => setFieldValue(formikKey, result.value)}
                  >
                    <Text style={{ color: theme.colors.primary }}>{result.label}</Text>
                  </Button>
                )}
              </View>
            ))}
          </View>
        </View>
      )
      }
      {
        fieldType === 'autofill' && (
          <View>
            <AutoFill
              parameter={data.parameter}
              formikProps={formikProps}
              formikKey={formikKey}
              scrollViewScroll={scrollViewScroll}
              setScrollViewScroll={setScrollViewScroll}
            />
          </View>
        )
      }
      {
        fieldType === 'geolocation' && (
          <View>
            <Button mode="contained" onPress={() => handleLocation()}>
              <Text>{location}</Text>
            </Button>
            {/* {location === null && (
              <PaperButton
                onPressEvent={handleLocation}
                buttonText={'Get Location'}
              />
            )}
            {location !== null && (
              <View>
                <PaperButton
                  onPressEvent={handleLocation}
                  buttonText={'Get Location Again'}
                />
                <Text>Latitude: {location['latitude']}</Text>
                <Text>Longitude: {location['longitude']}</Text>
              </View>
            )} */}
          </View>
        )
      }
      {
        fieldType === 'household' && (
          <View>
            <HouseholdManager
              formikProps={formikProps}
              formikKey={formikKey}
              surveyingOrganization={surveyingOrganization}
            />
          </View>
        )
      }
      {
        fieldType === 'header' && (
          <View>
            <Headline style={styles.header}>{label}</Headline>
            <View
              style={styles.horizontalLine}
            />
          </View>
        )
      }
      {
        fieldType === 'multiInputRow' && (
          <View style={styles.container}>
            <Text>{label}</Text>
            <View style={styles.multiInputContainer}>
              {data.options.map((result) => (
                <View key={result} style={styles.inputItem}>
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
        )
      }
      {
        fieldType === 'multiInputRowNum' && (
          <View style={styles.container}>
            <Text>{label}</Text>
            <View style={styles.multiInputContainer}>
              {data.options.map((result) => (
                <View key={result} style={styles.inputItem}>
                  <TextInput
                    label={result}
                    onChangeText={handleChange(result)}
                    onBlur={handleBlur(result)}
                    {...rest} //eslint-disable-line
                    mode="outlined"
                    keyboardType="numeric"
                    theme={{ colors: { placeholder: theme.colors.primary }, text: 'black' }}
                  />
                  <Text style={{ color: 'red' }}>
                    {touched[result] && errors[result]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )
      }
    </>
  );
};

export default PaperInputPicker;
