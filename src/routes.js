import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlashMessage from 'react-native-flash-message';

import AddNotification from './pages/AddNotification';
import ListNotifications from './pages/ListNotifications';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add" component={AddNotification} />
      <Tab.Screen name="Notifications" component={ListNotifications} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <MyTabs />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
