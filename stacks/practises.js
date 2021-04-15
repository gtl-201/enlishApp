import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Practises from "../screen/practises";
import Practise from "../screen/practise";

const Stack = createStackNavigator();

export default function PractisesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Practises" component={Practises}></Stack.Screen>
      <Stack.Screen name="Practise" component={Practise}></Stack.Screen>
    </Stack.Navigator>
  );
}
