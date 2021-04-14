import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RouteHome from "../screen/index";
import RouteExercise from "../screen/exercises";
import RouteAudio from "../screen/audio";
import { StackActions } from "@react-navigation/routers";

const Stack = createStackNavigator();

export default function Audio(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Audio' component={RouteAudio}></Stack.Screen>
            <Stack.Screen name='Home' component={RouteHome}></Stack.Screen>
            <Stack.Screen name='Exercise' component={RouteExercise}></Stack.Screen>
        </Stack.Navigator>
    )
}