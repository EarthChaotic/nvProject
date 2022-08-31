import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import Styles from "./components/Styles";

const StackSP = ({ navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={Styles.textTopStyle}>This is Second Page</Text>
        <Button
          color="#8A2BE2"
          title="Go To First Page"
          onPress={() => navigation.navigate("First Page")}
        />
        <Button
          color="#8A2BE2"
          title="Go To Third Page"
          onPress={() => navigation.navigate("Third Page")}
        />
      </View>
      <Text style={Styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  );
};

export default StackSP;
