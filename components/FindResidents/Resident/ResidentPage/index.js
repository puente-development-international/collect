import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text, TextInput, Button, Title
} from 'react-native-paper';

const ResidentPage = ({
  lname, nickname, city, license, picture, onSelectPerson, listItem, selectPerson
}) => {
  const { fname, lname, nickname, city, license } = selectPerson;
  const [pictureUrl, setPictureUrl] = useState();
  useEffect(() => {
    const pic = picture;
    if (pic) {
      setPictureUrl({ uri: pic.url })
      console.log("picture", pictureUrl)
    }
  }, [])
  return (
    <View>
      <Text>{fname}</Text>
      <Image
        style={styles.profPic}
        source={pictureUrl}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  profPic: {
    width: 50,
    height: 50
  }
})

export default ResidentPage;

