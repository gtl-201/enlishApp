import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Data = [
  { id: "Unit1" , VA: "0%" , AV: "0%" , L:"0%" },
  { id: "Unit2" , VA: "0%" , AV: "0%" , L:"0%" },
  { id: "Unit3" , VA: "0%" , AV: "0%" , L:"0%" },
  { id: "Unit4" , VA: "0%" , AV: "0%" , L:"0%" },
  { id: "Unit5" , VA: "0%" , AV: "0%" , L:"0%" },
  { id: "Unit6" , VA: "100%" , AV: "99%" , L:"99%" },
];

const Exercise = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { textAlign: "center",color:"#005bff", fontSize: 25 },
    });
  }, [navigation]);

  // const navigation = props;

  return (
    <View style={styles.containerHead}>
      <FlatList
        numColumns={2}
        data={Data}
        renderItem={({ item }) => (
          <View item={item} style={styles.boxItem}>
            <Text style={styles.id}> {item.id} </Text>
            <TouchableOpacity
              activeOpacity="0.5"
              onPress={() => navigation.navigate("Exercise",{id:item.id, type:"AV"} )}
              style={styles.boxInSight}
            >
              <Text style={{ fontSize: 14,fontWeight:600, color: "black" }}> Anh - Việt </Text>
              <Text> {item.VA} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity="0.5"
              onPress={() => navigation.navigate("Exercise",{id:item.id, type:"VA"} )}
              style={styles.boxInSight}
            >
              <Text style={{ fontSize: 14,fontWeight:600, color: "black" }}> Việt - Anh </Text>
              <Text> {item.AV} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity="0.5"
              onPress={() => navigation.navigate("Exercise",{id:item.id, type:"L"} )}
              style={styles.boxInSight}
            >
              <Text style={{ fontSize: 14,fontWeight:600, color: "black" }}> Listen </Text>
              <Text> {item.L} </Text>
            </TouchableOpacity>
          </View>
        )}
        // contentContainerStyle={{ justifyContent: "space-between" }}
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
    padding: 10,
  },
  boxItem: {
    width: "45%",
    padding: 5,
    borderColor: "#005bff",
    borderWidth: 2,
    margin:"auto",
    borderRadius: 10,
    marginBottom:10,
    backgroundColor:"none",
  },
  id: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    color:"#005bff",
  },
  boxInSight: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 6,
    borderRadius: 10,
    padding:4,
    flexDirection:"row",
    justifyContent:"space-between",
  },
});

export default Exercise;
