import React, { useState } from 'react';
import { View } from 'react-native';
import { Headline, Text, IconButton } from 'react-native-paper';
import Emoji from 'react-native-emoji';

import countService from '../../services/parse/calculate';

import { getData } from '../../modules/async-storage';

import styles from './index.styles';

const Header = ({ logOut }) => {
  const { header, headerText, headerIcon } = styles;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [surveyCount, setSurveyCount] = useState(0);
  const [volunteerDate, setVolunteerDate] = useState('');
  const [volunteerGreeting, setVolunteerGreeting] = useState('');

  const volunteerLength = (object) => {
    const date = new Date(object.createdAt);
    const convertedDate = date.toDateString();
    return convertedDate;
  };

  const calculateTime = (name) => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setVolunteerGreeting(`Good morning ${name}!` || 'Good morning!');
    } else if (curHr < 18) {
      setVolunteerGreeting(`Good afternoon ${name}!` || 'Good afternoon!');
    } else {
      setVolunteerGreeting(`Good evening ${name}!` || 'Good evening!');
    }
  };

  const count = async () => {
    getData('currentUser').then((user) => {
      const userName = `${user.firstname || ''} ${user.lastname || ''}`;
      calculateTime(user.firstname);
      setVolunteerDate(volunteerLength(user));
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
            <Headline style={styles.calculationText}>
              {volunteerGreeting}
              <Emoji name="coffee" />
            </Headline>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text style={styles.calculationText}>{`Volunteer Since\n${volunteerDate}`}</Text>
              <Text style={styles.calculationText}>{`Surveys Collected\n${surveyCount}`}</Text>
            </View>
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
