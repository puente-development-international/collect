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

import I18n from '../../../modules/i18n';

const PaperInputPicker = ({
  data, formikProps, scrollViewScroll, setScrollViewScroll, surveyingOrganization,
  customForm, ...rest
}) => {
  const { label, formikKey, fieldType } = data;
  const {
    handleChange, handleBlur, touched, errors, setFieldValue, values
  } = formikProps;

  const [location, setLocation] = React.useState({ latitude: 5, longitude: 10, altitude: 0 });

  const handleLocation = async () => {
    const currentLocation = await getLocation();
    const { latitude, longitude, altitude } = currentLocation.coords;

    setFieldValue('location', { latitude, longitude, altitude });
    setLocation({ latitude, longitude, altitude });
  };

  const translatedLabel = customForm ? label : I18n.t(label);

  return (
    <>
      {fieldType === 'input' && (
        <View style={styles}>
          <TextInput
            label={translatedLabel}
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
            label={translatedLabel}
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
          <Text style={layout.selectLabel}>{translatedLabel}</Text>
          <View style={layout.buttonGroupContainer}>
            {data.options.map((result) => (
              <View key={result.value}>
                {/* selected value */}
                {result.value === values[formikKey] && (
                  <Button
                    style={layout.buttonGroupButtonStyle}
                    key={result.value}
                    mode="contained"
                    onPress={() => setFieldValue(formikKey, result.value)}
                  >
                    <Text style={{ color: 'white' }}>{customForm ? result.label : I18n.t(result.label)}</Text>
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
                    <Text style={{ color: theme.colors.primary }}>
                      {customForm ? result.label : I18n.t(result.label)}
                    </Text>
                  </Button>
                )}
              </View>
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
          {location === null && (
            <PaperButton
              onPressEvent={handleLocation}
              buttonText="Get Location"
            />
          )}
          {location !== null && (
            <View>
              <PaperButton
                onPressEvent={handleLocation}
                buttonText="Get Location Again"
              />
              <View style={{ marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row' }}>
                <Text style={{ paddingRight: 5, fontWeight: 'bold' }}>
                  Latitude:
                  {location.latitude}
                </Text>
                <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>
                  Longitude:
                  {location.longitude}
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
      {fieldType === 'household' && (
        <View>
          <HouseholdManager
            formikProps={formikProps}
            formikKey={formikKey}
            surveyingOrganization={surveyingOrganization}
          />
        </View>
      )}
      {fieldType === 'header' && (
        <View>
          <Headline style={styles.header}>{translatedLabel}</Headline>
          <View
            style={styles.horizontalLine}
          />
        </View>
      )}
      {fieldType === 'multiInputRow' && (
        <View style={styles.container}>
          <Text>{translatedLabel}</Text>
          <View style={styles.multiInputContainer}>
            {data.options.map((result) => (
              <View key={result} style={styles.inputItem}>
                <TextInput
                  label={customForm ? result : I18n.t(result)}
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
      {fieldType === 'multiInputRowNum' && (
        <View style={styles.container}>
          <Text>{translatedLabel}</Text>
          <View style={styles.multiInputContainer}>
            {data.options.map((result) => (
              <View key={result} style={styles.inputItem}>
                <TextInput
                  label={customForm ? result : I18n.t(result)}
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
      )}
    </>
  );
};

export default PaperInputPicker;
