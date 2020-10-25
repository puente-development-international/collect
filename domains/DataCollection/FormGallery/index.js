import React from 'react';
import {
  View, ScrollView, StyleSheet
} from 'react-native';
import {
  Text, Button, Title, Paragraph, Card
} from 'react-native-paper';

import { layout } from '../../../modules/theme';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';
import SmallCardsCarousel from '../../../components/Cards/SmallCardsCarousel';
import I18n from '../../../modules/i18n';

const FormGallery = (props) => {
  const {
    navigateToNewRecord, navigateToCustomForm, puenteForms, customForms
  } = props;
  return (
    <View>
      <View style={layout.screenRow}>
        <Text style={styles.header}>{I18n.t('formsGallery.puenteForms')}</Text>
        <SmallCardsCarousel
          puenteForms={puenteForms}
          navigateToNewRecord={navigateToNewRecord}
          setUser={false}
        />
      </View>
      <View style={layout.screenRow}>
        <Text style={styles.header}>{I18n.t('formsGallery.customForms')}</Text>
        <ScrollView horizontal>
          {customForms && customForms.map((form) => (
            <Card
              key={form.objectId}
              style={layout.cardSmallStyle}
              onPress={() => {
                navigateToCustomForm(form);
              }}
            >
              <View marginTop="auto" marginBottom="auto">
                {form.name.length > 16 && (
                  <Button labelStyle={styles.buttonTextSmall} compact>{form.name}</Button>
                )}
                {form.name.length > 10 && form.name.length <= 16 && (
                  <Button labelStyle={styles.buttonTextMed} compact>{form.name}</Button>
                )}
                {form.name.length <= 10 && (
                  <Button labelStyle={styles.buttonTextBig} compact>{form.name}</Button>
                )}
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
      {customForms.length < 1 && (
        <View style={layout.screenRow}>
          <Card>
            <Card.Title title="You do not have any custom forms" />
            <Card.Content>
              <Text>Check out our marketplace to view available forms</Text>
              <Button>View Marketplace</Button>
            </Card.Content>
          </Card>
        </View>
      )}
      {/* <View style={layout.screenRow}>
        <Text>Manage My Pinned Forms</Text>
      </View> */}
      <View style={layout.screenRow}>
        <Text style={styles.header}>Market Place</Text>
      </View>
      <View style={layout.screenRow}>
        <Card>
          <Card.Content>
            <ComingSoonSVG width={200} height={200} />
            <Title>{I18n.t('formsGallery.ourMarketPlace')}</Title>
            <Paragraph>{I18n.t('formsGallery.discoverForms')}</Paragraph>
            <Button>
              <Text>{I18n.t('formsGallery.exploreForms')}</Text>
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTextSmall: {
    fontSize: 7
  },
  buttonTextMed: {
    fontSize: 10
  },
  buttonTextBig: {
    fontSize: 16
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default FormGallery;
