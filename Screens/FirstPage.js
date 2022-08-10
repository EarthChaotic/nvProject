import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const FirstPage = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button
      title='Create Post'
      onPress={()=>navigation.navigate('CreatePost')}
    />
    <Text style={{margin:10}}>Post:{route.params?.post}</Text>
  </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({})