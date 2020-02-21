import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddNotification from './pages/AddNotification';
import ListNotifications from './pages/ListNotifications';

function AddNotificationx() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ADd new Push!</Text>
    </View>
  );
}

// function ListNotifications() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>List All Push!</Text>
//     </View>
//   );
// }

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
    </NavigationContainer>
  );
}
