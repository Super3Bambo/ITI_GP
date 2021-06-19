import React from 'react';
import Booking from '../Components/Booking';
import Home from '../Components/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './../Components/Register';
import Login from './../Components/Login';

const Stack = createStackNavigator();
const HomeNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Register} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

export default HomeNavigators;
