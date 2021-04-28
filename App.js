import { StatusBar } from "expo-status-bar";
import React from "react";
import MainTabs from "./tabs/mainTab";
import {NavigationContainer} from "@react-navigation/native";

export default function App(){
  // const MainUrl = "https://my-json-server.typicode.com/gtl-201/serverJson/"
  return(
    <NavigationContainer>
      <MainTabs></MainTabs>
    </NavigationContainer>
  )
}
