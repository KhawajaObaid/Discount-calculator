import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './components/startscreen';
import Discountscreen from './components/disscreen';


export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discount screen" component={Discountscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
