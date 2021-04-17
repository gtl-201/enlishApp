import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Menu from "../screen/menu"

const Stack = createStackNavigator()

export default function menu(){
    return <Stack.Navigator>
        <Stack.Screen name="Menu" component='Menu'></Stack.Screen>
    </Stack.Navigator>
}
