import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

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
      return item.AV > 79 ? (
        <Text style={{ color: "#12ff12" }}>{item.AV}%</Text>
      ) : item.AV > 59 ? (
        <Text style={{ color: "#ff6a00" }}>{item.AV}%</Text>
      ) : (
        <Text style={{ color: "red" }}>{item.AV}%</Text>
      );
    };

    const VA = ({ item }) => {
      return item.VA > 79 ? (
        <Text style={{ color: "#12ff12" }}>{item.VA}%</Text>
      ) : item.VA > 59 ? (
        <Text style={{ color: "#ff6a00" }}>{item.VA}%</Text>
      ) : (
        <Text style={{ color: "red" }}>{item.VA}%</Text>
      );
    };

    const L = ({ item }) => {
      return item.L > 79 ? (
        <Text style={{ color: "#12ff12" }}>{item.L}%</Text>
      ) : item.L > 59 ? (
        <Text style={{ color: "#ff6a00" }}>{item.L}%</Text>
      ) : (
        <Text style={{ color: "red" }}>{item.L}%</Text>
      );
    };

    console.log((item.AV + item.VA + item.L) / 3);

    return (item.AV + item.VA + item.L) / 3 > 79 ? (
      <View item={item} style={[styles.boxItem, { borderColor: "#12ff12" }]}>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Anh - Việt{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Việt - Anh{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Listen{" "}
          </Text>
          <L item={item}></L>
        </TouchableOpacity>
      </View>
    ) : (item.AV + item.VA + item.L) / 3 > 60 ? (
      <View item={item} style={[styles.boxItem, { borderColor: "#fd5900" }]}>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Anh - Việt{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Việt - Anh{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Listen{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Anh - Việt{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Việt - Anh{" "}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
            {" "}
            Listen{" "}
          </Text>
          <L item={item}></L>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.containerHead}>
      <FlatList
        numColumns={2}
        data={Exercises}
        renderItem={({ item }) => <MainBox item={item}></MainBox>}
        contentContainerStyle={{ padding: 20 }}
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
  },
  boxItem: {
    width: "45%",
    padding: 5,
    borderColor: "#005bff",
    borderWidth: 2,
    margin: "auto",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#8080800d",
  },
  id: {
    fontSize: 22,
    fontWeight: 800,
    textAlign: "center",
    color: "#0000ff9c",
  },
  boxInSight: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 6,
    borderRadius: 10,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Exercise;
