import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Links: 'links',
        Data_Collection: 'data_collection',
        Data_Analysis: 'data_analysis'
      },
    },
  },
};
