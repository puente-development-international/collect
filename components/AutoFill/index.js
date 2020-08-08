import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import retrievePuenteAutofillData from '../../services/aws';

// Demo base API to get the data for the Autocomplete suggestion
export default class AutoFill extends Component {
  constructor(props) {
    super(props);
    // Initialization of state
    // films will contain the array of suggestion
    // query will have the input from the autocomplete input
    this.state = {
      fields: [],
      query: '',
    };
  }

  componentDidMount() {
    // First method to be called after components mount
    // fetch the data from the server for the suggestion
    const { parameter } = this.props;
    retrievePuenteAutofillData(parameter)
      .then((data) => {
        // console.log(data);
        this.state.fields = data;
      });
  }

  findField(query) {
    // method called everytime when we change the value of the input
    if (query === '') {
      // if the query is null then return blank
      return [];
    }

    const { fields } = this.state;
    // making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    return fields.filter((field) => field.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const fields = this.findField(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    const { parameter } = this.props;
    const placeholder = `Enter the ${parameter} here`;

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          // data to show in suggestion
          data={fields.length === 1 && comp(query, fields[0]) ? [] : fields}
          // default value if you want to set something in input
          defaultValue={query}
          /* onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions */
          onChangeText={(text) => this.setState({ query: text })}
          placeholder={placeholder}
          renderItem={({ item }) => (
            // you can change the view you want to show in suggestion from here
            <TouchableOpacity onPress={() => this.setState({ query: item })}>
              <Text style={styles.itemText}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {fields.length > 0 ? (
            <Text style={styles.infoText}>{query}</Text>
          ) : (
              <Text style={styles.infoText}>{placeholder}</Text>
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
