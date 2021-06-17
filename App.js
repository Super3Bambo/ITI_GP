import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import OnBoarding from './src/Components/OnBoardring';
import Register from './src/Components/Register';
import TabNavigators from './src/Navigators/TabNavigators';


const Stack=createStackNavigator()

const App = ()=> {
  return (
    <NavigationContainer >
       <Stack.Navigator headerMode="none">
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="TabNav"
         component={TabNavigators}
         
         />
        
    </Stack.Navigator>
        
    </NavigationContainer>

  );
};

export default App;
