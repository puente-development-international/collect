import React from 'react';
import {
  View
} from 'react-native';
import {
  Text, Button, Title, Paragraph, Card
} from 'react-native-paper';

import { layout } from '../../../modules/theme';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';
import SmallCardsCarousel from '../../../components/Cards/SmallCardsCarousel';

const FormGallery = (props) => {
  const { navigateToNewRecord, puenteForms } = props;
  return (
    <View>
      <View style={layout.screenRow}>
        <Text>Puente Forms</Text>
        <SmallCardsCarousel
          puenteForms={puenteForms}
          navigateToNewRecord={navigateToNewRecord}
          setUser={false}
        />
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
