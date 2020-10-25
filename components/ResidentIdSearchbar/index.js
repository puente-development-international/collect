import React, { useState, useEffect } from 'react';

import {
  View
} from 'react-native';

import {
  Headline, Button, Searchbar
} from 'react-native-paper';

import { residentIDQuery } from '../../services/parse/crud';

import ResidentCard from '../FindResidents/Resident/ResidentCard';

import styles from './index.styles';

const ResidentIdSearchbar = ({ surveyee, setSurveyee, surveyingOrganization }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchData();
  }, [surveyingOrganization]);

  const fetchData = async () => {
    const queryParams = {
      skip: 0,
      offset: 0,
      limit: 10000,
      parseColumn: 'surveyingOrganization',
      parseParam: surveyingOrganization,
    };
    let records = await residentIDQuery(queryParams);
    records = JSON.parse(JSON.stringify(records));

    setData(records);
    setResidents(records.slice());
  };

  const filterList = () => data.filter(
    (listItem) => {
      const fname = listItem.fname || ' ';
      const lname = listItem.lname || ' ';
      const nickname = listItem.nickname || ' ';
      return fname.toLowerCase().includes(query.toLowerCase())
        || lname
          .toLowerCase()
          .includes(query.toLowerCase())
        || nickname
          .toLowerCase()
          .includes(query.toLowerCase());
    }
  );

  const onChangeSearch = (input) => {
    setResidents(data.slice());
    setQuery(input);
  };

  const onSelectSurveyee = (listItem) => {
    setSurveyee(listItem);
    setQuery('');
  };

  return (
    <View>
      <Headline style={styles.header}>Search Individual</Headline>
      <Searchbar
        placeholder="Type Here..."
        onChangeText={onChangeSearch}
        value={query}
      />

      {query !== '' && filterList(residents).map((listItem,) => (
        <View key={listItem.objectId}>
          <Button onPress={() => onSelectSurveyee(listItem)}>{listItem.fname}</Button>
        </View>
      ))}

      {surveyee && surveyee.objectId && (
        <ResidentCard resident={surveyee} />
      )}
    </View>
  );
};

export default ResidentIdSearchbar;
