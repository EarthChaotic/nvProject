import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AboutScreen = ({route}) => {

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>About Screen</Text>
      <Text>Email : {route.params.email}</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})