import React from 'react';
import {
  View, ScrollView
} from 'react-native';
import {
  Text, Button, Title, Paragraph, Card
} from 'react-native-paper';

import { layout } from '../../../modules/theme';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';

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
              style={layout.cardSmallStyle}
              onPress={() => navigateToNewRecord(form.tag)}
            >
              <Text>{form.name}</Text>
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

export default FormGallery;
