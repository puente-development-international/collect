import React from 'react';
import { Picker } from 'native-base';

const languages = [
  {
    key: 'en', label: 'English'
  },
  {
    key: 'es', label: 'Spanish'
  }
];

const LanguagePicker = (props) => {
  const { language, onChangeLanguage } = props;
  return (
    <Picker
      mode="dropdown"
      iosHeader=""
      style={{ width: undefined, height: 40, }}
      selectedValue={language}
      onValueChange={onChangeLanguage}
    >
      {languages.map((lang) => <Picker.Item key={lang.key} value={lang.key} label={lang.label} />)}
    </Picker>
  );
};

export default LanguagePicker;
