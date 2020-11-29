import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Headline, Button, Searchbar } from 'react-native-paper';
import { Spinner } from 'native-base';

import { residentQuery } from '../../modules/cached-resources';

import { getData } from '../../modules/async-storage';
import I18n from '../../modules/i18n';

import ResidentCard from '../FindResidents/Resident/ResidentCard';

import styles from './index.styles';

const ResidentIdSearchbar = ({ surveyee, setSurveyee, surveyingOrganization }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAsyncData();
  }, [surveyingOrganization]);

  const fetchAsyncData = () => {
    setLoading(true);
    getData('residentData').then((residentData) => {
      if (residentData) {
        setData(residentData || []);
        setResidents(residentData.slice() || [].slice());
      }
      setLoading(false);
    });
  };

  const fetchData = async () => {
    setLoading(true);
    const queryParams = {
      skip: 0,
      offset: 0,
      limit: 100000,
      parseColumn: 'surveyingOrganization',
      parseParam: surveyingOrganization,
    };
    const records = await residentQuery(queryParams);

    setData(records);
    setResidents(records.slice());
    setLoading(false);
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

  const renderItem = ({ item }) => (
    <Button onPress={() => onSelectSurveyee(item)}>{`${item?.fname} ${item?.lname}`}</Button>
  );

  return (
    <View>
      <Headline style={styles.header}>{I18n.t('residentIdSearchbar.searchIndividual')}</Headline>
      <Searchbar
        placeholder="Type Here..."
        onChangeText={onChangeSearch}
        value={query}
      />
      <Button onPress={fetchData}>Refresh</Button>
      {loading
        && <Spinner color="blue" />}

      {/* {query !== '' && filterList(residents).map((listItem,) => (
        <View key={listItem.objectId}>
          <Button onPress={() => onSelectSurveyee(listItem)}>
          {listItem.fname || listItem.lname}
          </Button>
        </View>
      ))} */}

      {query !== '' && (
        <FlatList
          data={filterList(residents)}
          renderItem={renderItem}
          keyExtractor={(item) => item.objectId}
        />
      )}

      {surveyee && surveyee.objectId && (
        <ResidentCard resident={surveyee} />
      )}
    </View>
  );
};

export default ResidentIdSearchbar;
