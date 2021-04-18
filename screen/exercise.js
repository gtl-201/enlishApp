import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function excercise(route) {
  const Type = () => {
    return route.route.params.type == "AV"
      ? "Anh-Việt"
      : route.route.params.type == "VA"
      ? "Việt-Anh"
      : "Luyện Nghe";
  };

  const Url = () => {
    return route.route.params.id
      ? "http://localhost:3000/exerciseUnit" + route.route.params.id + "DB"
      : null;
  };
  console.log(Url());

  const random = () => {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //all numbers to be randomized
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  };
  // console.log(random());

  const { navigation } = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Unit" + " " + route.route.params.id + " " + Type(),
      headerTitleStyle: { color: "blue", fontSize: 20 },
    });
  }, [navigation]);

  const [isLoading, setLoading] = useState(true);
  const [Exercise, setData] = useState([]);
  React.useEffect(() => {
    fetch(Url())
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // console.log(Exercise[0][content]);

  return (
    <View>
      <FlatList
        data={Exercise}
        renderItem={({ item, index }) => {
          // let { excercise } = item;
          // if (!contents[index]) return null;
          // let details = contents[index];
          // let details = null;
          // !excercise[index] ? null : (details = excercise[index]);
          // console.log(excercise);
          // console.log(index);
          return (
            <View>
              <Text>{item.id}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
