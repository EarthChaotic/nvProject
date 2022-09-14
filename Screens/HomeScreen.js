import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
}
from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => ( 
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Register" iconName="person-add" onPress={() => alert('ลืมละใส่ไร')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="rgb(255,45,85)" />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
