import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DataCollection from '../screens/DataCollection';
import DataAnalysis from '../screens/DataAnalysis';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Data_Collection"
        component={DataCollection}
        options={{
          title: 'Data Collection',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-folder" />,
        }}
      />
      <BottomTab.Screen
        name="Data_Analysis"
        component={DataAnalysis}
        options={{
          title: 'Data Analysis',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-analytics" />,
        }}
      />
      <BottomTab.Screen
        name="Sign_Up"
        component={SignUp}
        options={{
          title: 'Sign up',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-arrow-forward" />,
        }}
      />
      <BottomTab.Screen
        name="Sign_In"
        component={SignIn}
        options={{
          title: 'Sign In',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-arrow-forward" />,
        }}
      />
    </BottomTab.Navigator>

  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Data_Collection':
      return 'Data Collection';
    case 'Data_Analysis':
      return 'Data Analysis';
    case 'Sign_Up':
      return 'Sign Up';
    case 'Sign_In':
      return 'Sign In';
    default:
      return 'Home';
  }
}
