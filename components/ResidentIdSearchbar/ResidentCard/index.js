import * as React from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text, TextInput, Button, Title
} from 'react-native-paper';

import { theme } from '../../../modules/theme';

const ResidentCard = ({
  fname, lname, nickname, city, license, picture
}) => {


  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.nameConatiner}>
          <Text style={styles.name}>{fname + " " + lname}</Text>
        </View>
        <Text style={styles.nickname}>{'"' + nickname + '"'}</Text>
        <View style={styles.cityLicenseContainer}>
          <View style={styles.cityContainer}>
            <Text style={styles.font}>City</Text>
            <Text style={styles.font}>{city}</Text>
          </View>
          <View style={styles.licenseContainer}>
            <Text style={styles.font}>License Number</Text>
            <Text style={styles.license}>License #</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.accent
  },
  nameConatiner: {
    backgroundColor: theme.colors.accent,
    marginTop: 15,
    height: 30
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  nickname: {
    marginLeft: 15,
    marginTop: 5,
    color: '#606060',
    fontSize: 15
  },
  cityLicenseContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 15
  },
  cityContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 'auto'

  },
  licenseContainer: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 15,
  },
  license: {
    marginLeft: 'auto',
    color: '#606060',
    fontSize: 15
  },
  font: {
    color: '#606060',
    fontSize: 15
  }

})

export default ResidentCard;