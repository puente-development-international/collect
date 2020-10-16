import React, { useState, useEffect } from 'react';

import {
  View
} from 'react-native';

import {
  Text, Searchbar
} from 'react-native-paper';

import { residentIDQuery } from '../../services/parse/crud';
import ResidentCard from './Resident/ResidentCard';
import ResidentPage from './Resident/ResidentPage';

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
    const queryParams = {
      skip: 0,
      offset: 0,
      limit: 10000,
      parseColumn: 'surveyingOrganization',
      parseParam: organization,
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

  const onSelectPerson = (listItem) => {
    setSelectPerson(listItem);
    setQuery('');
  };

  return (
    <View>
      {!selectPerson && (
        <>
          <Text>Search Individual</Text>
          <Searchbar
            placeholder="Type Here..."
            onChangeText={onChangeSearch}
            value={query}
          />
        </>
      )}
      {query !== '' && filterList(residents).map((listItem,) => (
        <View key={listItem.objectId}>
          <ResidentCard
            resident={listItem}
            onSelectPerson={onSelectPerson}
          />
        </View>
      ))}

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
