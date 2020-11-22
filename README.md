# puente-reactnative-collect
[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

[![Build Status](https://travis-ci.com/hopetambala/puente-reactnative-collect.svg?branch=master)](https://travis-ci.com/hopetambala/puente-reactnative-collect)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/490748505d184028b66bbdaf9c83f887)](https://app.codacy.com/manual/hopetambala/puente-reactnative-collect?utm_source=github.com&utm_medium=referral&utm_content=hopetambala/puente-reactnative-collect&utm_campaign=Badge_Grade_Dashboard)
[![codecov](https://codecov.io/gh/hopetambala/puente-reactnative-collect/branch/master/graph/badge.svg)](https://codecov.io/gh/hopetambala/puente-reactnative-collect)

Here are some quick npm commands to get started:
- `npm install`: Install Node dependencies
- `npm start`: Start expo.
- `npm test`: Run the test suit and watch for changes.
- `npm build`: Build a production optimized bundle of the app.
- `npm lint-fix`: Run the ESLinter.

## Async Storage Values

| Name of Value  | Description of Data                                                               |
|----------------|-----------------------------------------------------------------------------------|
| `organization` | Name of the surveying users surveyingOrganization                                 |
| `residentData` | All `SurveyData` parse model data stored based on the users surveyingOrganization |

## Select Values with Text Input
Select and MultiSelect PaperInputPicker fieldTypes have the option to have a text associated with a given select option.

For example if you wanted the user to have the option to add text when a user selects "Other", you would format your config for the field like this:

  {
    "label": "Some text.",
    "formikKey": "KEY",
    "value": [''],
    "fieldType": "select", 
    "options": [
      {
        "label": "Some text,
        "value": "some_val"
      },
      {
        "label": "Other",
        "value": "OTHER",
        "text": true,
        "textKey": "__KEY__OTHER"
      }
    ]
  }

Important notes:
"text": true
  - This adds the text input field to the Other select option
"textKey": "__KEY__OTHER"
  - __: The double underscore at the beginning of the key is required. No other keys in the config use this and CANNOT use the double underscore or there will be errors
  - KEY: this portion of the textKey needs to be an exact match to the formikKey of the field
  - __: Second double underscore is also required. Without the first double underscore it will not matter.
  - OTHER: This portion of the key is a direct match to the value of the select option. This is required to append the text input value to the original value in the array
  - none of these values need to be capitalized

## Resources

- [React Native Paper](https://callstack.github.io/react-native-paper/index.html)
- [Material Icons](https://materialdesignicons.com/)
- [Native Base](https://docs.nativebase.io/)
- [Expo](https://docs.expo.io/versions/latest/)
- [Understanding Flexbox](https://yogalayout.com/playground)

## Troubleshooting
- [React-Native Navigation Crash in Android](https://github.com/react-navigation/react-navigation/issues/6919#issuecomment-592093015)


## Standards
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/expo-community/standard-version-expo)
