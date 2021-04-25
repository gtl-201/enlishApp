import react from "react";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const MainBook = (route) => {
  const { navigation } = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { item } = route.route.params;
  const [dark, changeDark] = React.useState(false);

  if (dark == false) {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white"}}>
          <View>
            <Image source={item.url} style={styles.image} />
          </View>
          <View>
            <Text style={[styles.title, styles.black]}>{item.name}</Text>
            <Text style={[styles.content, styles.black]}>{item.readDemo}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => (dark == true ? changeDark(false) : changeDark(true))}
          style={[styles.light, styles.black]}
        >
          <Icon
            name="contrast-outline"
            size={30}
            style={{ opacity: 0.9 }}
          ></Icon>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ backgroundColor: "#000000e6"}}
        >
          <View>
            <Image source={item.url} style={styles.image} />
          </View>
          <View>
            <Text style={[styles.title, styles.white]}>{item.name}</Text>
            <Text style={[styles.content, styles.white]}>{item.readDemo}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => (dark == true ? changeDark(false) : changeDark(true))}
          style={[styles.light, styles.white]}
        >
          <Icon
            name="contrast-outline"
            size={30}
            color="white"
            style={{ opacity: 0.9 }}
          ></Icon>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 30,
  },
  content: {
    fontSize: 18,
    padding: 20,
    paddingTop: 10
  },
  image: {
    width: "100%",
    height: 500,
    zIndex: 2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  black: {
    color: "black",
  },
  white: {
    color: "white",
  },
  light: { position: "absolute", bottom: 10, right: 10 },
});

export default MainBook;
