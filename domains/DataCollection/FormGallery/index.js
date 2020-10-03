import React from 'react';
import {
  View, ScrollView
} from 'react-native';
import {
  Text, Button, Title, Paragraph, Card
} from 'react-native-paper';

import { layout } from '../../../modules/theme';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';

const FormGallery = () => (
  <View>
    <View style={layout.screenRow}>
      <Text>Puente Forms</Text>
      <ScrollView horizontal>
        <Card style={layout.cardSmallStyle}>
          <Text>Env Health</Text>
        </Card>
        <Card style={layout.cardSmallStyle}>
          <Text>Medical Assessment</Text>
        </Card>
        <Card style={layout.cardSmallStyle}>
          <Text>Vitals</Text>
        </Card>
        <Card style={layout.cardSmallStyle}>
          <Text>Vitals</Text>
        </Card>
        <Card style={layout.cardSmallStyle}>
          <Text>Vitals</Text>
        </Card>
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

export default FormGallery;
