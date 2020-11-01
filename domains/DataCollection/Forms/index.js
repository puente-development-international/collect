import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { layout } from '../../../modules/theme';
import I18n from '../../../modules/i18n';

import IdentificationForm from './IdentificationForm';
import SupplementaryForm from './SupplementaryForm';
import GdprCompliance from '../GdprCompliance';

import ResidentIdSearchbar from '../../../components/ResidentIdSearchbar';
import SmallCardsCarousel from '../../../components/Cards/SmallCardsCarousel';

import PostSubmissionSVG from '../../../assets/graphics/static/Submission-Page-Icon.svg';

const Forms = (props) => {
  const {
    navigation, navigateToGallery,
    selectedForm, setSelectedForm, navigateToNewRecord,
    scrollViewScroll, setScrollViewScroll,
    puenteForms,
    surveyingUser, surveyingOrganization,
    surveyee, setSurveyee,
    customForm
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
            surveyingOrganization={surveyingOrganization}
            customForm={customForm}
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
            <Text>{I18n.t('forms.successfullySubmitted')}</Text>
            <Text>{I18n.t('forms.grabCoffee')}</Text>
          </View>
          <View style={layout.container}>
            <Text>{I18n.t('forms.suggestedForms')}</Text>
            <SmallCardsCarousel
              puenteForms={puenteForms}
              navigateToNewRecord={navigateToNewRecord}
              setUser={false}
            />
            <Button mode="contained" onPress={navigateToGallery}>
              <Text style={{ color: 'white' }}>{I18n.t('forms.viewGallery')}</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Forms;
