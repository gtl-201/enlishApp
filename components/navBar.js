import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Book from "../asset/icons/icons8-book-64.png";
import HeadPhone from "../asset/icons/icons8-earbud-headphones-64.png";
import Home from "../asset/icons/icons8-home-page-64.png";
import Edit from "../asset/icons/icons8-edit-property-64.png";
import Burger from "../asset/icons/icons8-menu-48.png";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
  return (

    <View style={styles.container}>
      <Image source={Home} style={styles.navIcon}></Image>
      <Image source={HeadPhone} style={styles.navIcon}></Image>
      <Image source={Edit} style={styles.navIcon}></Image>
      <Image source={Book} style={styles.navIcon}></Image>
      <Image source={Burger} style={styles.navIcon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "6.5vh",
    flexDirection: "row",
    // padding:15,
    justifyContent: "space-between",
    backgroundColor: "#fdffff",
    paddingLeft: 15,
    paddingRight: 15,
  },

  navIcon: {
    width: 27,
    height: 35,
    // margin:"auto",
    // display:"flex",
    // alignItems:"center",
    // justifyContent:"center",
  },
});

export default Navbar;
