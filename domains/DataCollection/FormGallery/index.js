import React from 'react';
import {
  View, ScrollView, StyleSheet
} from 'react-native';
import {
  Text, Button, Title, Paragraph, Card
} from 'react-native-paper';

import { layout } from '../../../modules/theme';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';
import NewRecordSVG from '../../../assets/icons/New-Record-icon.svg';
import EnvSVG from '../../../assets/icons/Home-icon.svg';
import MedEvalSVG from '../../../assets/icons/Heart-Icon.svg';

const FormGallery = (props) => {
  const { navigateToNewRecord, puenteForms } = props;
  return (
    <View>
      <View style={layout.screenRow}>
        <Text>Puente Forms</Text>
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
      </View>
      <View style={layout.screenRow}>
        <Text>Custom Forms</Text>
      </View>
      <View style={layout.screenRow}>
        <Text>Manage My Pinned Forms</Text>
      </View>
      <View style={layout.screenRow}>
        <Card>
          <Card.Content>
            <ComingSoonSVG width={200} height={200} />
            <Title>Our Marketplace</Title>
            <Paragraph>Discover forms created by trusted companies</Paragraph>
            <Button>
              <Text>Explore Forms</Text>
            </Button>
          </Card.Content>
        </Card>
      </View>
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

export default FormGallery;
