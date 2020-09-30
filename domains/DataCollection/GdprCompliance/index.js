import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  Text, Button, Title, Checkbox
} from 'react-native-paper';
import { theme } from '../../../modules/theme';

import TermsModal from '../../../components/TermsModal';

const GdprCompliance = ({
  setConsent
}) => {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const continueToForm = () => {
    if (checked) {
      setConsent(true);
    } else {
      alert("Community member must consent before you can continue."); // eslint-disable-line
    }
  };
  return (
    <View>
      <Title style={{ marginLeft: 15 }}>Consent Form</Title>
      <View style={styles.container}>
        <Text style={{ flex: 2, padding: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.a. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur.
        </Text>
        <Button
          style={styles.policyButton}
          mode="outlined"
          onPress={() => setVisible(true)}
        >
          View Full Policy
        </Button>
      </View>
      <TermsModal
        visible={visible}
        setVisible={setVisible}
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <Checkbox
            disabled={false}
            theme={theme}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Text style={styles.checkboxText}>Community member agrees to data policy</Text>
      </View>

      <Button style={{ margin: 15 }} mode="contained" onPress={() => continueToForm()}>Continue to Form</Button>
    </View>
  );
};

export default GdprCompliance;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 0,
    margin: 15,
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderColor: theme.colors.primary
  },
  policyButton: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: theme.colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 20,
    width: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',

  },
  checkboxText: {
    marginLeft: 15,
    marginTop: 10
  }

});
