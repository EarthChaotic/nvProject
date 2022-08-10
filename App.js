import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './Screens/FirstPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='FirstPage'
      screenOptions={{
        headerStyle: { backgroundColor:'#FE0000'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold',fontSize:25}
      }}
      >
        <Stack.Screen name ='FirstPage' component = {FirstPage}/>
        {/* <Stack.Screen name ='CreatePost' component = {SecondPage}/> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
