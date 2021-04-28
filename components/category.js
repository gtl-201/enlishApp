import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeadPhone from "../asset/icons/icons8-headphones-48.png";
import Read from "../asset/icons/icons8-read-48.png";
import Write from "../asset/icons/icons8-ereader-48.png";
import Book from "../asset/icons/icons8-books64.png";
import Music from "../asset/icons/icons8-music-48.png";
import Dictionary from "../asset/icons/icons8-books-48.png";
import Story from "../asset/icons/icons8-short-48.png";
import Store from "../asset/icons/icons8-small-business-48.png";
import Youtobe from "../asset/icons/icons8-play-button-48.png";

const Category = (props) => {
  // console.log(props);
  const { navigation } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: "100%" }}>
        <Text style={styles.title}>Basic:</Text>
        <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
          <TouchableOpacity style={styles.box3}>
            <Image source={HeadPhone} style={styles.img}></Image>
            <Text style={styles.content}>audio & video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Read} style={styles.img}></Image>
            <Text style={styles.content}>exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Write} style={styles.img}></Image>
            <Text style={styles.content}>practice</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Store:</Text>
        <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
          <TouchableOpacity style={styles.box1}>
            <Image source={Store} style={styles.img}></Image>
            <Text style={styles.content}>Buy our Books</Text>
            <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Extend:</Text>
        <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
          <TouchableOpacity style={styles.box3}>
            <Image source={Music} style={styles.img}></Image>
            <Text style={styles.content}>music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Dictionary} style={styles.img}></Image>
            <Text style={styles.content}>Dictionary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Story} style={styles.img}></Image>
            <Text style={styles.content}>e story</Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.title}>Learn iels:</Text> */}
        <View style={[styles.box1, { padding: 20,marginBottom:40 }]}>
          <TouchableOpacity
            activeOpacity="0.5"
            style={[styles.box1, { padding: 0 }]}
          >
            <View style={styles.button}>
              <Image
                source={Youtobe}
                style={{ width: 50, height: 50, marginRight: 15 }}
              ></Image>
              <Text>See Our Course</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact bo may: +84 940 272 166</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "65%",
    // overflow:"scroll",
  },
  flexRow: {
    flexDirection: "row",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#8a72ff",
    color: "white",
    width: "90%",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    fontSize: 17,
    fontWeight: "bold",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // textAlign:"center",
  },

  box3: {
    borderColor: "black",
    width: "30%",
    // margin: "auto",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  box2: {
    // borderWidth: 2,
    borderColor: "black",
    width: "45%",
    // margin: "auto",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  box1: {
    // borderWidth: 2,
    borderColor: "black",
    width: "100%",
    // margin: "auto",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  title: {
    marginLeft: -5,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 7,
    zIndex: 40,
  },
  img: {
    width: 40,
    height: 40,
  },
  content: {
    fontSize: 13,
    textTransform: "capitalize",
  },
});

export default Category;
