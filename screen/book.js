import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const MainBook = (route) => {
  const { navigation } = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const { item } = route.route.params;
  return (
    <ScrollView  style={{backgroundColor:"#000000e6"}}>
      <View>
        <Image
          source={item.url}
          style={{ width: "100%", height: 500, zIndex: 2, borderBottomLeftRadius:30,borderBottomRightRadius:30 }}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title:{
    color:"white",
    fontSize:25,
    fontWeight:600,
    textAlign:"center",
    marginTop:10,
    marginHorizontal:30
  }
})

export default MainBook;
