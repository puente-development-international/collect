// Make this render but switch between forms
import React from 'react';
import {
  View
} from 'react-native';

import IdentificationForm from './IdentificationForm';

const Form = (props) => {
  const { navigation, selectedForm, scrollViewScroll, setScrollViewScroll } = props
  return (
    <View>
      {selectedForm === "id" &&
        <IdentificationForm
          navigation={navigation}
          scrollViewScroll={scrollViewScroll}
          setScrollViewScroll={setScrollViewScroll}
        />
      }
    </View>)
};

export default Form;
