import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const FirstPage = ({navigation,route}) => {

    const [postText, setPostText] = React.useState("");
    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text styles={styles.textStyle}>Please Insert Your Name To Pass It To Second Screen</Text>
        <TextInput
        placeholder='Name Here'
        style={{
            width:300,
            padding:10,
            backgroundColor:"white",
            marginTop:15,
            marginBottom:10
        }}
        onChangeText={setPostText}
        value={postText}
        />
        <Button 
      title='Go Next'
      onPress={()=>navigation.navigate('Second Page',
      {postText}
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