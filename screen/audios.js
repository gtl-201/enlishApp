import React,{useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const Audio = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [audioDb, setData] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/audioDB")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:"Audio & Music",
      headerTitleStyle: {
        textAlign: "center",
        color: "black",
        fontSize: 28,
      },
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        numColumns={2}
        data={audioDb}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Audio", { id: item.id })}
          >
            <Text style={{ fontSize: 20,fontWeight:500 }}>{item.id}</Text>
            <Icon name="musical-notes-outline" size={20}></Icon>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.container}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop:20,
  },
  box: {
    flex: 1,
    padding: 7,
    marginHorizontal: 10,
    marginBottom: 15,
    // marginHorizontal:10,
    borderWidth: 2,
    borderColor: "#80808094",
    borderRadius: 10,
    backgroundColor: "#80808026",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Audio;
