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
import HeadPhone from "../asset/icons/icons8-headset-50.png";
import Read from "../asset/icons/icons8-reading-50.png";
import Write from "../asset/icons/icons8-edit-50.png";

const Category = (props) => {
  // console.log(props);
  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: "100%" }}>
        <Text style={styles.title}>Basic:</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.box3} onPress={()=>navigation.navigate("Exercise")}>
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

        <Text style={styles.title}>Buy Books:</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.box1}>
            <Image source={HeadPhone} style={styles.img}></Image>
            <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Extend:</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.box3}>
            <Image source={HeadPhone} style={styles.img}></Image>
            <Text style={styles.content}>music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Read} style={styles.img}></Image>
            <Text style={styles.content}>Dictionary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <Image source={Write} style={styles.img}></Image>
            <Text style={styles.content}>e story</Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.title}>Learn iels:</Text> */}
        <View style={[styles.box1, { padding: 20 }]}>
          <TouchableOpacity
            activeOpacity="0.5"
            style={[styles.box1, { padding: 0 }]}
          >
            <Text style={styles.button}>
              <Image
                source={Read}
                style={{ width: 50, height: 50, marginRight: 3 }}
              ></Image>
              See Our Course
            </Text>
          </TouchableOpacity>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
          <Text style={styles.content}>Contact us: +84 940 272 166</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height:"65vh",
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
    justifyContent: "center",
    alignItems: "center",
  },

  box3: {
    borderColor: "black",
    width: "30%",
    margin: "auto",
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
    margin: "auto",
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
    margin: "auto",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  title: {
    marginLeft: -5,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 7,
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
