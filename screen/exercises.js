import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const Exercise = (props) => {
  const { navigation } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        textAlign: "center",
        color: "#0000ff9c",
        fontSize: 28,
      },
    });
  }, [navigation]);

  // var MainUrl = MainUrl.replace("return ", "");
  // console.log(MainUrl)

  const [isLoading, setLoading] = useState(true);
  const [Exercises, setData] = useState([]);
  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/gtl-201/serverJson/exercisesDB")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // const navigation = props;

  const MainBox = (props) => {
    const { item } = props;
    console.log(item.title);

    const AV = ({ item }) => {
      return item.AV > 75 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#00d50c",fontWeight:"600" }}>{item.AV}%</Text>
      ) : item.AV > 50 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#ff6a00" }}>{item.AV}%</Text>
      ) : (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "red" }}>{item.AV}%</Text>
      );
    };

    const VA = ({ item }) => {
      return item.VA > 79 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#00d50c",fontWeight:"600" }}>{item.VA}%</Text>
      ) : item.VA > 59 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#ff6a00" }}>{item.VA}%</Text>
      ) : (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "red" }}>{item.VA}%</Text>
      );
    };

    const L = ({ item }) => {
      return item.L > 79 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#00d50c",fontWeight:"600" }}>{item.L}%</Text>
      ) : item.L > 59 ? (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "#ff6a00" }}>{item.L}%</Text>
      ) : (
        <Text style={{ paddingRight:10,paddingVertical:5,color: "red" }}>{item.L}%</Text>
      );
    };

    console.log((item.AV + item.VA + item.L) / 3);

    return (item.AV + item.VA + item.L) / 3 > 75 ? (
      <View item={item} style={[styles.boxItem, { borderColor: "#00EE76", borderWidth:3 }]}>
        <Text style={[styles.id,{color:"#00d50c"}]}> unit {item.id} </Text>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "AV",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Anh - Việt</Text>
          <AV item={item}></AV>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "VA",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Việt - Anh</Text>
          <VA item={item}></VA>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "L",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Listen</Text>
          <L item={item}></L>
        </TouchableOpacity>
      </View>
    ) : (item.AV + item.VA + item.L) / 3 > 10 ? (
      <View item={item} style={[styles.boxItem, { borderColor: "#fd5900" }]}>
        <Text style={[styles.id,{color:"#ff221c"}]}> unit {item.id} </Text>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "AV",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Anh - Việt</Text>
          <AV item={item}></AV>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "VA",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Việt - Anh</Text>
          <VA item={item}></VA>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "L",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Listen</Text>
          <L item={item}></L>
        </TouchableOpacity>
      </View>
    ) : (
      <View item={item} style={[styles.boxItem, { borderColor: "blue" }]}>
        <Text style={styles.id}> unit {item.id} </Text>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "AV",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Anh - Việt</Text>
          <AV item={item}></AV>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "VA",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Việt - Anh</Text>
          <VA item={item}></VA>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.5"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: item.id,
              type: "L",
              headeLine: item.title,
            })
          }
          style={styles.boxInSight}
        >
          <Text style={styles.smallerTitle}>Listen</Text>
          <L item={item}></L>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.containerHead,
        { justifyContent: "space-around", width: "100%" },
      ]}
    >
      <FlatList
        numColumns={2}
        data={Exercises}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              width: "50%",
              paddingHorizontal: "1%",
              paddingVertical: "0.5%",
            }}
          >
            <MainBox item={item}></MainBox>
          </View>
        )}
        contentContainerStyle={{ padding: 10, justifyContent: "space-around" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHead: {
    // alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    // justifyContent:"space-around"
  },
  boxItem: {
    width: "100%",
    padding: 5,
    borderColor: "#005bff",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#0000000d",
  },
  id: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    color: "#0000ff9c",
  },
  boxInSight: {
    borderWidth: 2,
    borderColor: "#00000040",
    marginTop: 6,
    borderRadius: 10,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"white"
  },
  smallerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    paddingVertical:5,
    paddingLeft:10
  },
});

export default Exercise;
