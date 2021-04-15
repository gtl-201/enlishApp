import { StatusBar } from "expo-status-bar";
import React, { useState }  from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Exercise = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [Exercises, setData] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/exerciseDB")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        textAlign: "center",
        color: "#0000ff9c",
        fontSize: 28,
      },
    });
  }, [navigation]);

  // const navigation = props;

  return (
    <View style={styles.containerHead}>
      <ScrollView style={{ padding: 10 }}>
        <FlatList
          numColumns={2}
          data={Exercises}
          renderItem={({ item }) => (
            <View item={item} style={styles.boxItem}>
              <Text style={styles.id}> {item.id} </Text>
              <TouchableOpacity
                activeOpacity="0.5"
                onPress={() =>
                  navigation.navigate("Exercise", { id: item.id, type: "AV" })
                }
                style={styles.boxInSight}
              >
                <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
                  {" "}
                  Anh - Việt{" "}
                </Text>
                <Text> {item.VA}% </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity="0.5"
                onPress={() =>
                  navigation.navigate("Exercise", { id: item.id, type: "VA" })
                }
                style={styles.boxInSight}
              >
                <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
                  {" "}
                  Việt - Anh{" "}
                </Text>
                <Text> {item.AV}% </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity="0.5"
                onPress={() =>
                  navigation.navigate("Exercise", { id: item.id, type: "L" })
                }
                style={styles.boxInSight}
              >
                <Text style={{ fontSize: 14, fontWeight: 600, color: "black" }}>
                  {" "}
                  Listen{" "}
                </Text>
                <Text> {item.L}% </Text>
              </TouchableOpacity>
            </View>
          )}
          // contentContainerStyle={{ justifyContent: "space-between" }}
        />
      </ScrollView>
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
