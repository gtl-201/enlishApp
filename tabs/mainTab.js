import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../stacks/index";
import Exercise from "../stacks/exercises";
import Audio from "../stacks/audios";
import Practise from "../stacks/practises";

import Icon from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

export default function mainTabs() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#5851DB",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Exercise") {
            iconName = focused
              ? "book"
              : "book-outline";
          } 
          else if (route.name === "Audio") {
            iconName = focused ? "headset" : "headset-outline";
          }
          else if (route.name === "Practise") {
            iconName = focused ? "create" : "create-outline";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="Exercise" component={Exercise}></Tabs.Screen>
      <Tabs.Screen name="Practise" component={Practise}></Tabs.Screen>
      <Tabs.Screen name="Audio" component={Audio}></Tabs.Screen>
    </Tabs.Navigator>
  );
}
