import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import Styles from './components/Styles';

const StackFP = ({navigation,route}) => {
    
  return (
    <View style={Styles.container}>
        <Text style={Styles.textTopStyle}>This is First Page</Text>
        <Button
        color='#8A2BE2'
      title='Go To Second Page'
      onPress={()=>navigation.navigate('Second Page')}
      />
              <Button 
              color='#8A2BE2'
      title='Go To Third Page'
      onPress={()=>navigation.navigate('Third Page')}
      />
  </View>
  )
}

export default StackFP