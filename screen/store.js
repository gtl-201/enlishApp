import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BookStoreBanner from "../asset/image/ezgif.com-gif-makerr.jpg";
import FamilyFriends1 from "../asset/image/Fa-1-SB-scaled.jpg";

const Store = (props) => {
  const { navigation } = props;

  const [isLoading, setLoading] = useState(true);
  const [StoreDB, setData] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/storeDB")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Image
          source={BookStoreBanner}
          style={{ width: "100%", height: 600 }}
        ></Image>

        <View style={Styles.boxOut}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="eye-outline"
                size={19}
                color="#8560f7"
                style={{ marginRight: 5 }}
              ></Icon>
              <Text style={{ fontSize: 19, fontWeight: 500, color: "#8560f7" }}>
                Grid View
              </Text>
            </View>
            <Icon
              name="search-outline"
              size={19}
              color="#0f00ff"
              fontWeight={600}
            ></Icon>
          </View>
          <FlatList
            numColumns={1}
            data={StoreDB}
            renderItem={({ item }) => {
              {
                console.log(item.url);
              }
              //   import Url from item.url;
              return (
                <View style={Styles.boxIn}>
                  <View style={Styles.bookView}>
                    <Image source={item.url} style={Styles.book} />
                  </View>
                  <View
                    style={{ justifyContent: "space-between", width: "60%" }}
                  >
                    <View>
                      <Text style={[Styles.bookName]}>{item.name}</Text>
                      <Text style={[Styles.author]}>{item.author}</Text>
                      <Text>{item.des}</Text>
                      <Text style={Styles.price}>{item.price}$</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                      <TouchableOpacity activeOpacity={0.5}>
                        <Text style={Styles.buttonLeft}>Read Online</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.5}>
                        <Text style={Styles.buttonRight}>Buy It</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          {/* <Text>xyz</Text> */}
        </View>
      </View>{" "}
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  boxOut: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -40,
    zIndex: 2,
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 0,
  },
  boxIn: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "space-between",
  },
  bookView: {
    width: "36%",
    zIndex: 3,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  book: {
    width: "100%",
    height: 170,
  },
  bookName: {
    fontSize: 20,
    fontWeight: 700,
    color: "#2e217b",
    marginVertical: 2,
  },
  author: {
    fontSize: 17,
    fontWeight: 700,
    color: "#808080e6",
  },
  price:{
    color:"red",
    fontWeight:600,
  },

  buttonLeft: {
    borderWidth: 1.5,
    fontSize: 17,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginBottom: 7,
    borderColor: "#a56301",
    backgroundColor: "#fca72aba",
    marginRight: 10,
  },
  buttonRight: {
    borderWidth: 1.5,
    fontSize: 17,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginBottom: 7,
    borderColor: "black",
    backgroundColor: "#2d2d2dcf",
    color: "white",
  },
});

export default Store;
