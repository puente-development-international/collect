import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';

import BottomTabNavigator from './BottomTabNavigator.';
import LinkingConfiguration from './LinkingConfiguration';
import { initialize } from '../../services/parse/auth/index';
import SignIn from '../../domains/SignIn';
import SignUp from '../../domains/SignUp';


const Stack = createStackNavigator();

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
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});