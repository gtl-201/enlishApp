import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function excercise(route) {
  const {navigation} = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.route.params.id + "_" + route.route.params.type,
      headerTitleStyle: { color: "blue", fontSize: 20 },
    });
  }, [navigation]);
  return (
    <View>
      <Text>{}</Text>
      <Text>{}</Text>
    </View>
  );
}
