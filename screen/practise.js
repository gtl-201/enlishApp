import React from "react";
import {StyleSheet,View} from "react-native";

export default function Pratise(route){
    const {navigation} = route;
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: route.route.params.id + "_" + route.route.params.level,
          headerTitleStyle: { color: "blue", fontSize: 20 },
        });
      }, [navigation]);
      return(
          <View></View>
      )
}