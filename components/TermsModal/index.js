import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Modal, Text, Portal, Headline
} from 'react-native-paper';

// STYLING
import theme from '../../modules/theme';

export default function TermsModal(props) {
  return (
    <Portal theme={theme}>
      <Modal
        visible={props.visible}
        theme={theme}
        contentContainerStyle={styles.modal}
        onDismiss={props.hideModal}
      >
        <Headline theme={theme}>Terms and Service</Headline>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 30,
    margin: 30
  },
})