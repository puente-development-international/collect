import {
  StyleSheet
} from 'react-native';

import theme from '../../../modules/theme';

const { colors } = theme;
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'stretch',
    justifyContent: 'center',
  }

});

export default styles;
