import { StyleSheet } from 'react-native';
import { theme } from '../../modules/theme';

const borderRadius = 20;

const { accent, black } = theme.colors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: accent
  },
  header: {
    height: 80, // equivalent to flex: 0.2,
    paddingTop: 20, // for ios
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: accent
  },
  headerIcon: {
    borderRadius: 30,
    color: black
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: black,
    flex: 0.7
  },
  calculationText: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'center',
    padding: 20
  }

});

export default styles;
