// Make this render but switch between forms
import React from 'react';

import PatientIDForm from './PatientID';

const Form = ({ navigation }) => (
  <PatientIDForm navigation={navigation} />
);

export default Form;
