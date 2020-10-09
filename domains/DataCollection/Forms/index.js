import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';
import GdprCompliance from '../GdprCompliance';

import { layout } from '../../../modules/theme';

import ResidentIdSearchbar from '../../../components/ResidentIdSearchbar';

import PostSubmissionSVG from '../../../assets/graphics/static/Submission-Page-Icon.svg';
import NewRecordSVG from '../../../assets/icons/New-Record-icon.svg';
import EnvSVG from '../../../assets/icons/Home-icon.svg';
import MedEvalSVG from '../../../assets/icons/Heart-Icon.svg';

const Forms = (props) => {
  const {
    navigation, navigateToGallery,
    selectedForm, setSelectedForm, navigateToNewRecord,
    scrollViewScroll, setScrollViewScroll,
    puenteForms, surveyingUser, surveyingOrganization, surveyee, setSurveyee
  } = props;
  const [consent, setConsent] = useState(false);

  return (
    <View style={layout.screenContainer}>
      {consent === true && selectedForm === 'id' && (
        <IdentificationForm
          navigation={navigation}
          scrollViewScroll={scrollViewScroll}
          setScrollViewScroll={setScrollViewScroll}
          setSelectedForm={setSelectedForm}
          setSurveyee={setSurveyee}
          surveyingOrganization={surveyingOrganization}
          surveyingUser={surveyingUser}
        />
      )}
      {consent === true && selectedForm !== 'id' && selectedForm !== '' && (
        <View>
          <View style={layout.container}>
            <ResidentIdSearchbar
              surveyee={surveyee}
              setSurveyee={setSurveyee}
              surveyingOrganization={surveyingOrganization}
            />
          </View>
          <SupplementaryForm
            navigation={navigation}
            selectedForm={selectedForm}
            setSelectedForm={setSelectedForm}
            surveyee={surveyee}
            surveyingUser={surveyingUser}
          />
        </View>
      )}
      {consent === false && (
        <GdprCompliance
          navigation={navigation}
          setConsent={setConsent}
        />
      )}
      {selectedForm === '' && (
        <View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            <PostSubmissionSVG width={350} height={350} />
            <Text>Form successfully submitted</Text>
            <Text>Grab yourself a coffee</Text>
          </View>
          <View style={layout.container}>
            <Text>Suggested next Forms</Text>
            <ScrollView horizontal>
              {puenteForms.map((form) => (
                <Card
                  key={form.tag}
                  style={styles.cardSmallStyle}
                  onPress={() => navigateToNewRecord(form.tag)}
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
            <Button mode="contained" onPress={navigateToGallery}>
              <Text style={{ color: 'white' }}>View Forms Gallery</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

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
export default Forms;
