import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Styles from "./components/Styles";

const StackTP = ({ navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={Styles.textTopStyle}>This is Third Page</Text>
        <Button
          color="#8A2BE2"
          title="Go To First Page"
          onPress={() => navigation.navigate("First Page")}
        />
        <Button
          color="#8A2BE2"
          title="Go To Second Page"
          onPress={() => navigation.navigate("Second Page")}
        />
      </View>
      <Text style={Styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  );
};

export default StackTP;
