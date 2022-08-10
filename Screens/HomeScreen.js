import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Ionicons
      name='home'
      size={30}
      color='#00812'
      />
      <Text>Home Screen</Text>
      <Button 
      title='เกี่ยวกับเรา'
      onPress={()=>navigation.navigate('About',
      {email:'tr.jirapon_st@tni.ac.th'}
      )}
      />
    </View>
  )
}

export default HomeScreen
