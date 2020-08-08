import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../../../components/TabBarIcon';
import HomeScreen from '../../../domains/HomeScreen';
import DataCollection from '../../../domains/DataCollection';
import DataAnalysis from '../../../domains/DataAnalysis';

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
    default:
      return 'Home';
  }
}
