import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {
  Text, Title
} from 'react-native-paper';

import { theme } from '../../../../../modules/theme';
import ComingSoonSVG from '../../../../../assets/graphics/static/Adventurer.svg';
import SmallCardsCarousel from '../../../../Cards/SmallCardsCarousel';

const Forms = ({
  puenteForms, navigateToNewRecord, surveyee, setView
}) => (
  <View style={styles.container}>
    <Title style={styles.title}>Completed Forms</Title>
    <Text style={styles.category}>Form Category</Text>
    <View
      style={styles.horizontalLine}
    />
    <ComingSoonSVG width={200} height={200} />
    <Text>Coming Soon</Text>
    <Title style={styles.title}>Suggested Forms</Title>
    <SmallCardsCarousel
      puenteForms={puenteForms}
      navigateToNewRecord={navigateToNewRecord}
      surveyee={surveyee}
      setView={setView}
      setUser
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  horizontalLine: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
  }
});

export default Forms;
