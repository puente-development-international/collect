import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

import countService from '../../services/parse/calculate';

import { getData } from '../../modules/async-storage';

import styles from './index.styles';

const Header = ({ logOut }) => {
  const { header, headerText, headerIcon } = styles;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [surveyCount, setSurveyCount] = useState(0);

  const count = async () => {
    getData('currentUser').then((user) => {
      const userName = `${user.firstname || ''} ${user.lastname || ''}`;
      countService('SurveyData', 'surveyingUser', userName).then((counts) => {
        setSurveyCount(counts);
      });
    });

    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles.container}>
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
      {drawerOpen === true
        && (
          <View>
            <Text style={styles.calculationText}>{`Surveys Collected\n${surveyCount}`}</Text>
          </View>
        )}
      <IconButton
        size={3}
        style={{
          width: 70, backgroundColor: 'grey', alignSelf: 'center', opacity: 0.5
        }}
        onPress={count}
      />
    </View>
  );
};

export default Header;
