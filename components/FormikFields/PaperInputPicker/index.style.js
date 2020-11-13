import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,

  },
  inputItem: {
    flex: 7,
    marginHorizontal: 5
  },
  multiInputContainer: {
    flexDirection: 'row'
  },
  container: {
    flexDirection: 'column'
  },
  header: {
    fontWeight: 'bold',
    marginTop: 10
  }
});

export default styles;
