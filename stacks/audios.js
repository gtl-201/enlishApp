import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RouteAudios from "../screen/audios";
import RouteAudio from "../screen/audio";

const Stack = createStackNavigator();

export default function Audio() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Audios" component={RouteAudios}></Stack.Screen>
      <Stack.Screen name="Audio" component={RouteAudio}></Stack.Screen>
    </Stack.Navigator>
  );
}
