import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const SignInFailedModal = ({
  visible, setVisible
}) => {

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={setVisible(false)}>
          <Dialog.Title>Failed Sign In</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Your username or password may be incorrect, please try again.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={setVisible(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default SignInFailedModal;