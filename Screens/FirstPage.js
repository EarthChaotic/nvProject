import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const FirstPage = ({navigation,route}) => {
    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text styles={styles.textStyle}>Please insert your name to pass it to second screen</Text>
        <Button 
      title='เกี่ยวกับเรา'
      onPress={()=>navigation.navigate('SecondPage',
      {email:'tr.jirapon_st@tni.ac.th'}
      )}
      />
        
  </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
})