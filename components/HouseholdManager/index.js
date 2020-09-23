import * as React from 'react';

import {
  View,
} from 'react-native';

import { Text, Button, Searchbar } from 'react-native-paper'



const HouseholdManager = (props) => {
  const { data } = props
  const [searchQuery, setSearchQuery] = React.useState(''); //set search by 
  const onChangeSearch = query => setSearchQuery(query);

  const filterList = () => {
    return data.filter(
      (listItem) =>
        listItem.fname
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        ||
        listItem.lname.
          toLowerCase().
          includes(searchQuery.toLowerCase())
      //   ||
      // listItem.nickname
      //   .toLowerCase()
      //   .includes(searchQuery.toLowerCase())
    );
  }

  return (
    <View>
      <Text>Search Individual</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {searchQuery !== '' && filterList(data).map((listItem, index) => (
        <Button key={index} fname={listItem.fname} lname={listItem.lname}>{listItem.fname}</Button>
      ))}
    </View>
  )
}

export default HouseholdManager