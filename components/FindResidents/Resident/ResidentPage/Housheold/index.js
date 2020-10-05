import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text, Title
} from 'react-native-paper';

import { theme } from '../../../../../modules/theme';
import ComingSoonSVG from '../../../../../assets/graphics/static/Adventurer.svg';

const Household = ({
  fname, lname, nickname, city, picture, onSelectPerson, listItem
}) => {
  return (
    <View>
      <View marginLeft={'auto'} marginRight={'auto'}>
        <ComingSoonSVG width={200} height={200} />
      </View>
      <View marginLeft={'auto'} marginRight={'auto'}>
      <Text marginLeft={'auto'} marginRight={'auto'}>Coming Soon</Text>
      </View>
    </View>
  )
}

export default Household;