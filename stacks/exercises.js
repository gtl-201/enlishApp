import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RouteHome from "../screen/index";
import RouteExercises from "../screen/exercises";
import RouteExercise from "../screen/exercise";
import RouteAudio from "../screen/audios";


const Stack = createStackNavigator();

export default function Exercise() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Exercises"} component={RouteExercises} />
      <Stack.Screen name={"Home"} component={RouteHome} />
      <Stack.Screen name={"Exercise"} component={RouteExercise} />
      <Stack.Screen name={"Audio"} component={RouteAudio} />
    </Stack.Navigator>
  );
}
