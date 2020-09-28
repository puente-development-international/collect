import {
  StyleSheet
} from 'react-native';

const layout = StyleSheet.create({
  /**
   * Container for a Domain Screen
   */
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  line: {
    flex: 0.5,
    padding: 10,
  },
  /**
   * Styling for rows in a screenContainer
   */
  screenRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  /**
   * Container for a Formik Form
   */
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  /**
   * Container for a Button Group
   */
  buttonGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonGroupButtonStyle: {
    marginHorizontal: 5,
    marginVertical: 5
  }
});

export default layout;
