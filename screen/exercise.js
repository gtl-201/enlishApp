import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function excercise(route) {
    console.log(route);
  return (
    <View>
      <Text>{route.route.params.id}</Text>
      <Text>{route.route.params.type}</Text>
    </View>
  );
}
