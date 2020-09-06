// Make this render but switch between forms
import React from 'react';

import IdentificationForm from './IdentificationForm';

const Form = ({ navigation, scrollViewScroll, setScrollViewScroll }) => (
  <IdentificationForm
    navigation={navigation}
    scrollViewScroll={scrollViewScroll}
    setScrollViewScroll={setScrollViewScroll}
  />
);

export default Form;
