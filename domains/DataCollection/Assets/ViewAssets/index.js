import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import PaperInputPicker from '../../../../components/FormikFields/PaperInputPicker';
import I18n from '../../../../modules/i18n';
import { layout } from '../../../../modules/theme';

const ViewAssets = () => (
  <View>
    <Text>Map</Text>
  </View>
);

export default ViewAssets;
