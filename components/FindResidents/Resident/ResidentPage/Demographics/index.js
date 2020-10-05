import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {
  Text,
} from 'react-native-paper';

const Demographics = ({
  dob, community, province, city, license
}) => (
  <View style={styles.container}>
    <Text style={styles.topLabel}>
      Date of Birth:
      {dob}
    </Text>
    <Text style={styles.labels}>
      City:
      {` ${city}`}
    </Text>
    <Text style={styles.labels}>
      Community:
      {` ${community}`}
    </Text>
    <Text style={styles.labels}>
      Province:
      {` ${province}`}
    </Text>
    <Text style={styles.labels}>
      License Number:
      {` ${license}`}
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  labels: {
    marginTop: 20,
    fontSize: 17,
    color: '#696969'
  },
  topLabel: {
    fontSize: 17,
    color: '#696969'
  }
});

export default Demographics;
