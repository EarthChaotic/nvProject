import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function HomeScreen(navigation,route){
  React.useEffect(()=>{
    if(route.params?.post){
      //Post update, do something with 'route,params.post'
      //for example, sent post to the server
    }
  },[route.params?.post])

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button
        title='Create Post'
        onPress={()=>navigation.navigate('CreatePost')}
      />
      <Text style={{margin:10}}>Post:{}</Text>
    </View>
  );

}

function CreatePostScreen(){
  const [postText,setPostText] = React.useState('');
  return(
    <>
    <TextInput
    multiline
    placeholder='Text Here'
    style={{height:200,padding:10,backgroundColor:"white"}}
    onChangeText={setPostText}
    value = {postText}
    />
    <Button
    title='Post'
    onPress={()=>{
      //Pass Params to Home Screen
      navigation.navigate('Home',{post:postText})
    }}
    
    />
    </>

  )
}


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
        <Stack.Screen name ='CreatePost' component = {CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
