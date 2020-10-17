import React from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

import styles from './index.styles';

const Header = ({ logOut }) => {
  const { header, headerText, headerIcon } = styles;
  return (
    <View style={header}>
      <Text style={headerText}>PUENTE</Text>
      <View style={headerIcon}>
        <IconButton
          icon="account"
          color={headerIcon.color}
          size={30}
        />
      </View>

      <View style={headerIcon}>
        {logOut && (
        <IconButton
          icon="logout"
          color={headerIcon.color}
          size={30}
          onPress={logOut}
        />
        )}
      </View>
    </View>
  );
};

export default Header;
