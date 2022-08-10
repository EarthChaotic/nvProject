import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#FE0000'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold',fontSize:25}
      }}
      >
        <Stack.Screen name ='Home' component = {HomeScreen}/>
        <Stack.Screen name ='About' component = {AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
