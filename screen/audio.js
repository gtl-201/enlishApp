import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Audio(route) {
  const { navigation } = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.route.params.id,
      headerTitleStyle: { color: "blue", fontSize: 20 },
    });
  }, [navigation]);

  return (
    <View>
      <Text>{}</Text>
    </View>
  );
}
