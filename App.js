import { StatusBar } from "expo-status-bar";
import React from "react";
import MainTabs from "./tabs/mainTab";
import {NavigationContainer} from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <MainTabs></MainTabs>
    </NavigationContainer>
  )
}
