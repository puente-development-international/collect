import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text, Title, Card
} from 'react-native-paper';

import { layout, theme } from '../../../../../modules/theme';
import ComingSoonSVG from '../../../../../assets/graphics/static/Adventurer.svg';


const Forms = ({
  puenteForms, navigateToNewRecord
}) => {
  return (
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
            style={layout.cardSmallStyle}
            onPress={() => navigateToNewRecord(form.tag)}
          >
            <Text>{form.name}</Text>
          </Card>
        ))}
      </ScrollView>
    </View >
  )
}

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
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
  },
})

export default Forms;