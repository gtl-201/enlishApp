import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Practises = (props) => {
  const { navigation } = props;
  
  const [isLoading, setLoading] = useState(true);
  const [PractisesDb, setData] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/practisesDB")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        textAlign: "center",
        color: "#1ba1ff",
        fontSize: 28,
      },
    });
  }, [navigation]);

  const Boxout = (props) => {
    const { item } = props;

    const Easy = ({ item }) => {
      return item.easy > 79 ? (
        <Text style={{ color: "#12ff12" }}>{item.easy}%</Text>
      ) : item.easy > 59 ? (
        <Text style={{ color: "#ff6a00" }}>{item.easy}%</Text>
      ) : (
        <Text style={{ color: "red" }}>{item.easy}%</Text>
      );
    };

    const Hard = ({ item }) => {
      return item.hard > 79 ? (
        <Text style={{ color: "#12ff12" }}>{item.hard}%</Text>
      ) : item.hard > 59 ? (
        <Text style={{ color: "#ff6a00" }}>{item.hard}%</Text>
      ) : (
        <Text style={{ color: "red" }}>{item.hard}%</Text>
      );
    };

    // console.log((item.easy + item.hard)/2);
    console.log(item)
    return ((item.easy + item.hard)/2) > 79 ? (
      <View
        style={[
          Styles.boxOut,
          { borderColor: "#12ff12"},
        ]}
      >
        <Text style={Styles.title}> unit {item.id}</Text>
        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "easy",
            })
          }
        >
          <Text>Easy</Text>
          <Easy item={item}></Easy>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "hard",
            })
          }
        >
          <Text>Hard</Text>
          <Hard item={item}></Hard>
        </TouchableOpacity>
      </View>
    ) : 
    ((item.easy + item.hard)/2) > 60 ?(
      <View style={[Styles.boxOut, { borderColor: "#fd5900" }]}>
        <Text style={Styles.title}> unit {item.id}</Text>
        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "easy",
            })
          }
        >
          <Text>Easy</Text>
          <Easy item={item}></Easy>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "hard",
            })
          }
        >
          <Text>Hard</Text>
          <Hard item={item}></Hard>
        </TouchableOpacity>
      </View>
    ):
    (
      <View style={[Styles.boxOut, { borderColor: "#bcf8f9" }]}>
        <Text style={Styles.title}> unit {item.id}</Text>
        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "easy",
            })
          }
        >
          <Text>Easy</Text>
          <Easy item={item}></Easy>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.boxIn}
          onPress={() =>
            navigation.navigate("Practise", {
              id: item.id,
              level: "hard",
            })
          }
        >
          <Text>Hard</Text>
          <Hard item={item}></Hard>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={PractisesDb}
      renderItem={({ item }) => (
        <Boxout item={item}></Boxout>
      )}
      contentContainerStyle={{ padding: 10, backgroundColor: "white" }}
    />
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 800,
    color: "#1ba1ff",
  },
  boxOut: {
    flex: 1,
    padding: 12,
    margin: 10,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#8080800d",
  },
  boxIn: {
    padding: 5,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    marginTop: 6,
    color: "black",
    fontWeight: 600,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1.3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 2,
  },
});

export default Practises;
