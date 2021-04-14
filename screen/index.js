import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/headIndex";
import Category from "../components/category";

const Index = ({ navigation }) => {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown:false});
  }, [navigation]);

  return (
    <View style={styles.containerHead}>
      <Header></Header>
      <Category navigation={navigation}></Category>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHead: {
    alignItems: "stretch",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#f5f8fe",
  },
});

export default Index;
