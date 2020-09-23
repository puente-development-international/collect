import * as React from 'react';

import {
  View,
} from 'react-native';

import {
  Text, Button, Chip, Searchbar
} from 'react-native-paper';

import { layout } from '../../modules/theme';

const HouseholdManager = (props) => {
  const { data } = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectPerson, setSelectPerson] = React.useState();
  const onChangeSearch = (query) => setSearchQuery(query);

  const filterList = () => data.filter(
    (listItem) => listItem.fname
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
      || listItem.lname
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      || listItem.nickname
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <Text>Search Individual</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {searchQuery !== '' && filterList(data).map((listItem,) => (
        <View style={layout.buttonGroupContainer}>
          <Button onPress={() => setSelectPerson(listItem)} key={listItem}>{listItem.fname}</Button>
        </View>
      ))}
      {selectPerson && (
        <Chip icon="information">
          {selectPerson.fname}
          {selectPerson.lname}
        </Chip>
      )}
    </View>
  );
};

export default HouseholdManager;
