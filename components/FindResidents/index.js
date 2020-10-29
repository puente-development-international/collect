import React, { useState, useEffect } from 'react';

import {
  View, FlatList
} from 'react-native';

import {
  Headline, Searchbar
} from 'react-native-paper';

import { residentIDQuery } from '../../services/parse/crud';

import { getData, storeData } from '../../modules/async-storage';
import I18n from '../../modules/i18n';

import ResidentCard from './Resident/ResidentCard';
import ResidentPage from './Resident/ResidentPage';

import styles from './index.styles';

const FindResidents = ({
  selectPerson, setSelectPerson, organization, puenteForms, navigateToNewRecord,
  surveyee, setSurveyee, setView
}) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getData('residentData').then((residentData) => {
      if (residentData) {
        setData(residentData || []);
        setResidents(residentData.slice() || [].slice());
      }
    });

    const queryParams = {
      skip: 0,
      offset: 0,
      limit: 10000,
      parseColumn: 'surveyingOrganization',
      parseParam: organization,
    };

    let records = await residentIDQuery(queryParams);
    records = JSON.parse(JSON.stringify(records));

    if (data !== records) {
      storeData(records, 'residentData');
      setData(records);
      setResidents(records.slice());
    }
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

  const onSelectPerson = (listItem) => {
    setSelectPerson(listItem);
    setQuery('');
  };

  const renderItem = ({ item }) => (
    <View key={item.objectId}>
      <ResidentCard
        resident={item}
        onSelectPerson={onSelectPerson}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {!selectPerson && (
        <>
          <Headline style={styles.header}>{I18n.t('findResident.searchIndividual')}</Headline>
          <Searchbar
            placeholder={I18n.t('findResident.typeHere')}
            onChangeText={onChangeSearch}
            value={query}
          />
        </>
      )}

      {/* Non-virtualized list */}
      {/* {!selectPerson && filterList(residents).map((listItem,) => (
        <View key={listItem.objectId}>
          <ResidentCard
            resident={listItem}
            onSelectPerson={onSelectPerson}
          />
        </View>
      ))} */}

      {!selectPerson
        && (
          <FlatList
            data={filterList(residents)}
            renderItem={renderItem}
            keyExtractor={(item) => item.objectId}
          />
        )}

      {selectPerson && (
        <ResidentPage
          fname={selectPerson.fname}
          lname={selectPerson.lname}
          nickname={selectPerson.nickname}
          city={selectPerson.city}
          license={selectPerson.license}
          picture={selectPerson.picture}
          selectPerson={selectPerson}
          setSelectPerson={setSelectPerson}
          puenteForms={puenteForms}
          navigateToNewRecord={navigateToNewRecord}
          surveyee={surveyee}
          setSurveyee={setSurveyee}
          setView={setView}
        />
      )}
    </View>
  );
};

export default FindResidents;
