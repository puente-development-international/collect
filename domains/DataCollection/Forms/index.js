// Make this render but switch between forms
import React from 'react';

import PatientIDForm from './PatientID';

const Form = ({ navigation, scrollViewScroll, setScrollViewScroll }) => (
  <PatientIDForm
    navigation={navigation}
    scrollViewScroll={scrollViewScroll}
    setScrollViewScroll={setScrollViewScroll}
  />
);

export default Form;
