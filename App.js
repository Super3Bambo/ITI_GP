import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Booking from './src/Components/Booking';
import HomeNavigators from './src/Navigators/HomeNavigators';
import ProfileNavigators from './src/Navigators/ProfileNavigators';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeNavigators} />
        <Tab.Screen name="Booking" component={Booking} />
        <Tab.Screen name="Profile" component={ProfileNavigators} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
