import React from 'react';
import {
  View, StyleSheet, ScrollView
} from 'react-native';
import {
  Card, Button
} from 'react-native-paper';

import NewRecordSVG from '../../../assets/icons/New-Record-icon.svg';
import EnvSVG from '../../../assets/icons/Home-icon.svg';
import MedEvalSVG from '../../../assets/icons/Heart-Icon.svg';

/**
 * Carousel of Forms that are used for Form Navigation
 *
 * @name SmallCardsCarousel
 * @example
 * <SmallCardsCarousel
 *  
 * />
 * 
 * @param {Array} puenteForms Array of Forms to navigate through
 * @param {Function} navigateToNewRecord Function to navigate to a new form
 * @param {Function} setView Function to set view of the Data Collection Screen  (FindRecords, FormGallery, etc)
 * @param {Object} surveyee Object for current surveyee (i.e. community resident) that's being surveyed
 * @param {Boolean} setUser Boolean that if true, saves the surveyees object in the higher-order state
 * 
 * @returns 
 */

const SmallCardsCarousel = ({
  puenteForms, navigateToNewRecord, setView, surveyee, setUser
}) => (
    <ScrollView horizontal>
      {puenteForms.map((form) => (
        <Card
          key={form.tag}
          style={styles.cardSmallStyle}
          onPress={() => {
            if (setUser) {
              setView('Forms');
              navigateToNewRecord(form.tag, surveyee);
            } else {
              navigateToNewRecord(form.tag);
            }
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
  );

const styles = StyleSheet.create({
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

export default SmallCardsCarousel;
