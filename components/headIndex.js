import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Bg from "../asset/image/c739830ada7ea71fefed868be577b57c.jpg";
import Avt from "../asset/icons/gtlLogo2.jpg";
import Avt2 from "../asset/icons/gtlLogo.jpg";


const Head = () => {
  return (
    <View style={[styles.container,{marginBottom:30,}]}>
      <Image source={Bg} style={styles.backgroundImg}></Image>
      <Image source={Bg} style={styles.circleAvt}></Image>
      <Text style={styles.title}>gtl learn English</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "80%",
  },
  circleAvt: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -70,
    borderWidth: 1,
    borderColor: "gray",
  },
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "25%",
    width: "100%",
  },
  title:{
      fontSize:20,
      fontWeight:"bold",
      textTransform:"uppercase",
  }
});

export default Head;
