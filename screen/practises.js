import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Practises = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [PractisesDb, setData] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/practiseDB")
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
  return (
    <ScrollView style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
      <FlatList
        numColumns={2}
        data={PractisesDb}
        renderItem={({ item }) => (
          <View style={Styles.boxOut}>
            <Text style={Styles.title}>{item.id}</Text>
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
              <Text>{item.easy}%</Text>
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
              <Text>{item.hard}%</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
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
    borderColor: "#1ba1ff",
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
});

export default Practises;
