import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RouteIndex from "../screen/index";
import RouteExercises from "../screen/exercises";
import RouteAudio from "../screen/audios";


const Stack = createStackNavigator();
export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={RouteIndex}></Stack.Screen>
      <Stack.Screen name='Exercise' component={RouteExercises}></Stack.Screen>
      <Stack.Screen name='Audio' component={RouteAudio}></Stack.Screen>
    </Stack.Navigator>
  );
}
