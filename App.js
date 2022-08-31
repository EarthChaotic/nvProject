import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './Screens/FirstPage';
import SecondPage from './Screens/SecondPage';
import StackFP from './Pages/StackFP';
import StackSP from './Pages/StackSP';
import StackTP from './Pages/StackTP';
import Styles from './Pages/components/Styles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='StackFP'
      screenOptions={{
        headerStyle: { backgroundColor:'#8A2BE2'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold',fontSize:25}
      }}
      >
        <Stack.Screen name ='First Page' component = {StackFP}/>
        <Stack.Screen name ='Second Page' component = {StackSP}/>
        <Stack.Screen name ='Third Page' component = {StackTP}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}