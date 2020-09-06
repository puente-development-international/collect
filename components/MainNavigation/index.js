import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator.';
import LinkingConfiguration from './LinkingConfiguration';
import Header from '../Header';

import SignIn from '../../domains/SignIn';
import SignUp from '../../domains/SignUp';
import GetPinCode from '../../domains/PinCode/GetPinCode';
import StorePinCode from '../../domains/PinCode/StorePinCode';

import { initialize } from '../../services/parse/auth/index';

import theme from '../../modules/theme';

const Stack = createStackNavigator();

const { background } = theme.colors;

export default class MainNavigation extends React.Component {
  constructor(props) {
    super(props);
    initialize();
  }

  render() {
    // const isLoadingComplete = useCachedResources();

    // if (!isLoadingComplete) {
    //   return null;
    // }
    const { container } = styles;
    return (
      <View style={container}>
        {Platform.OS === 'ios' && <StatusBar />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="GetPincode" component={GetPinCode} options={{ headerShown: false }} />
            <Stack.Screen name="StorePincode" component={StorePinCode} options={{ headerShown: false }} />
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={() => ({
                header: () => (
                  <View style={{ backgroundColor: background }}>
                    <Header />
                  </View>
                )
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  }
});
