import React from 'react';
import {
  View, StyleSheet, ScrollView
} from 'react-native';
import {
  Text, Title, Card, Button
} from 'react-native-paper';

import { theme } from '../../../../../modules/theme';
import ComingSoonSVG from '../../../../../assets/graphics/static/Adventurer.svg';
import NewRecordSVG from '../../../../../assets/icons/New-Record-icon.svg';
import EnvSVG from '../../../../../assets/icons/Home-icon.svg';
import MedEvalSVG from '../../../../../assets/icons/Heart-Icon.svg';

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
    <ScrollView horizontal>
      {puenteForms.map((form) => (
        <Card
          key={form.tag}
          style={styles.cardSmallStyle}
          onPress={() => {
            setView('Forms');
            navigateToNewRecord(form.tag, surveyee);
          }}
        >
          {form.tag === 'id' && (
          <View marginTop="auto" marginBottom="auto">
            <NewRecordSVG height={40} style={styles.svg} />
            <Button labelStyle={styles.topButton} compact>Resident ID</Button>
            <Button labelStyle={styles.bottomButton} compact />
          </View>
          )}

          {form.tag === 'env' && (
          <View marginTop="auto" marginBottom="auto">
            <EnvSVG height={40} style={styles.svg} />
            <View>
              <Button labelStyle={styles.topButton} compact>Environmental</Button>
              <Button labelStyle={styles.bottomButton} compact>History</Button>
            </View>
          </View>
          )}
          {form.tag === 'med-eval' && (
          <View marginTop="auto" marginBottom="auto">
            <MedEvalSVG height={40} style={styles.svg} />
            <View marginTop="auto">
              <Button labelStyle={styles.topButton} compact>Medical</Button>
              <Button labelStyle={styles.bottomButton} compact>Evaluation</Button>
            </View>
          </View>
          )}
        </Card>
      ))}
    </ScrollView>
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
  },
  cardSmallStyle: {
    height: 110,
    width: 150,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  svg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topButton: {
    marginTop: 10,
    marginBottom: 0,
    padding: 0
  },
  bottomButton: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  }
});

export default Forms;
