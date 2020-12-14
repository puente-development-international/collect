import React, { useState } from 'react';
import { View } from 'react-native';
import { Headline, Text, IconButton, Button, Modal } from 'react-native-paper';
import Emoji from 'react-native-emoji';

import countService from '../../services/parse/calculate';

import { getData } from '../../modules/async-storage';
import { postOfflineForms } from '../../modules/cached-resources';

import styles from './index.styles';

import I18n from '../../modules/i18n';

const Header = ({ logOut }) => {
  const { header, headerText, headerIcon } = styles;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [surveyCount, setSurveyCount] = useState(0);
  const [volunteerDate, setVolunteerDate] = useState('');
  const [volunteerGreeting, setVolunteerGreeting] = useState('');
  const [offlineForms, setOfflineForms] = useState(false);
  const [offlineFormCount, setOfflineFormCount] = useState(0);
  const [failedSubmission, setFailedSubmission] = useState(false);
  const [successfullSubmission, setSuccessfullSubmission] = useState(false);

  const volunteerLength = (object) => {
    const date = new Date(object.createdAt);
    const convertedDate = date.toDateString();
    return convertedDate;
  };

  const calculateTime = (name) => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setVolunteerGreeting(`${I18n.t('header.goodMorning')} ${name}!` || I18n.t('header.goodMorning!'));
    } else if (curHr < 18) {
      setVolunteerGreeting(`${I18n.t('header.goodAfternoon')} ${name}!` || I18n.t('header.goodAfternoon!'));
    } else {
      setVolunteerGreeting(`${I18n.t('header.goodEvening')} ${name}!` || I18n.t('header.goodEvening!'));
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

    getData('offlineIDForms').then((idForms) => {
      if (idForms) {
        setOfflineForms(true);
        console.log(idForms.length)
        return idForms.length;
      }
      return 0;
    })
      .then((idFormCount) => {
        getData('offlineSupForms').then((supForms) => {
          if (supForms) {
            console.log(supForms.length);
            setOfflineForms(true);
            setOfflineFormCount(idFormCount + supForms.length)
          }
          else {
            setOfflineFormCount(idFormCount);
          }
          idFormCount === 0 ? setOfflineForms(false) : setOfflineForms(true);

        })
      })

    setDrawerOpen(!drawerOpen);
  };

  const postOffline = () => {
    postOfflineForms().then((result) => {
      if (result) {
        setOfflineForms(false);
        setFailedSubmission(false);
        setSuccessfullSubmission(true);
      }
    })
      .catch(() => {
        setFailedSubmission(true);
      })
  }

  return (
    <View style={styles.container}>
      <View style={header}>
        <Text style={headerText}>{I18n.t('header.puente')}</Text>
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
              <Text style={styles.calculationText}>{`${I18n.t('header.volunteerSince')}\n${volunteerDate}`}</Text>
              <Text style={styles.calculationText}>{`${I18n.t('header.surveysCollected')}\n${surveyCount}`}</Text>
            </View>
            {offlineForms ? (
              <Button onPress={postOffline}>Submit Offline Forms</Button>
            ) : (
                <Button disabled={true}>Submit Offline Forms</Button>
              )
            }
            {failedSubmission && (
              <View>
                <Text style={styles.calculationText}>Failed Attempt Submitting Offline Forms.</Text>
                <Text style={{ alignSelf: 'center' }}>Please ensure that you are connected to the internet and try again.</Text>
                <Button onPress={() => setFailedSubmission(false)}>Ok</Button>
              </View>
            )}
            {successfullSubmission && (
              <View>
                <Text style={styles.calculationText}>Success!</Text>
                <Text style={{ alignSelf: 'center' }}>You have just submitted {offlineFormCount} forms!</Text>
                <Button onPress={() => setSuccessfullSubmission(false)}>Ok</Button>
              </View>
            )}
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
