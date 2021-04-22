import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Store from "../screen/store"
import BookDemo from "../screen/book"

export default function StoreStack(){
    const Stack = createStackNavigator();

    return <Stack.Navigator>
        <Stack.Screen name={"Store"} component={Store}></Stack.Screen>
        <Stack.Screen name={"BookDemo"} component={BookDemo}></Stack.Screen>
    </Stack.Navigator>
}