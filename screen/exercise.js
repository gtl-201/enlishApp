import React, { useState, Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function excercise(route) {
  const Type = () => {
    return route.route.params.type == "AV"
      ? "Anh-Việt"
      : route.route.params.type == "VA"
      ? "Việt-Anh"
      : "Luyện Nghe";
  };

  //START HEADER TITLE
  const { navigation } = route;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:
        "Unit" +
        " " +
        route.route.params.id +
        ": " +
        route.route.params.headeLine,
      headerTitleStyle: { color: "blue", fontSize: 20 },
    });
  }, [navigation]);
  //END HEADER TITLE
  const random = () => {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8],
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

  const [QuestionNumArr, setQuestionNumArr] = React.useState(random());

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const Url = () => {
    if (currentQuestion < QuestionNumArr.length) {
      return route.route.params.id
        ? "http://localhost:3000/exerciseunit" +
            route.route.params.id +
            "DB?id=" +
            QuestionNumArr[currentQuestion]
        : null;
    }
  };
  // console.log(QuestionNumArr[currentQuestion])
  console.log(QuestionNumArr);
  console.log(currentQuestion);
  console.log(Url());

  const [isLoading, setLoading] = useState(true);
  const [Exercise, setData] = useState([]);

  //START FETCH JSON
  // React.useEffect(() => {
  //   fetch(Url())
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  const put = () => {
    if (isLoading == true) {
      console.log("x");
      fetch(Url())
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };
  put();
  //END FETCH JSON

  const Next = (
    <Button
      title="Tiếp Tục"
      onPress={() => {
        setCurrentQuestion(currentQuestion + 1);
        Url();
        setLoading(true);
        put();
      }}
      color="#00ce00"
      style={[Styles.Button]}
    ></Button>
  );

  const MainViewsVietAnh = ({ item }) => {
    const [text, onChangeText] = React.useState(null);
    const [AlertResult, onChangeAlertResult] = React.useState("");
    let CheckPress = "not";
    let right = 0;
    //CHECK BUTTON
    const Check = (
      <Button
        title="Kiểm Tra"
        onPress={() => {
          CheckPress = "yes";
          // console.log(CheckPress);
          PressButton({ item });
        }}
        color="#37c137"
        style={Styles.Button}
      ></Button>
    );
    //END CHECK BUTTON

    //START CHECK AlertResult OR RIGHT
    const PressButton = ({ item }) => {
      if (CheckPress == "yes") {
        CheckPress = "not";
        // console.log(CheckPress);
        // console.log(text);
        // console.log(item.eng);
        text == item.eng
          ? onChangeAlertResult("Uay gioi the dung roi ban e")
          : onChangeAlertResult("Sai roi phai la " + item.eng + " ma`");
      } else {
        onChangeAlertResult("");
        return "";
      }
    };
    console.log(right + "xxx");
    //END CHECK AlertResult OR RIGHT

    if (currentQuestion < QuestionNumArr.length) {
      return (
        <View style={Styles.container}>
          <Text style={Styles.title}>{item.vi}</Text>

          <TextInput
            placeholder="Type Your Answer"
            style={{ borderWidth: 2 }}
            onChangeText={onChangeText}
            // onBlur={onChangeText}
            style={Styles.inputt}
          ></TextInput>
          {/* <Text>{text}</Text> */}

          {text == null ? (
            ""
          ) : item.eng == text ? (
            <Image
              source="https://i.pinimg.com/564x/06/a9/71/06a9710220271892169d285f7b993742.jpg"
              style={{ height: "auto", with: 250 }}
            ></Image>
          ) : (
            <Image
              source="https://i.pinimg.com/564x/4d/26/83/4d2683793138a73fa25e57773006f3c0.jpg"
              style={{ height: "auto", with: 250 }}
            ></Image>
          )}

          <Text style={Styles.alertResult}> {AlertResult} </Text>

          <Text></Text>
          {/* {console.log(route.route.params.id)} */}

          {AlertResult != "" ? Next : Check}
        </View>
      );
    } else {
      return (
        <View style={Styles.container}>
          <Text>End Exercise</Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={Exercise}
      renderItem={({ item, index }) => {
        // console.log(item);
        if (route.route.params.type == "VA") {
          return <MainViewsVietAnh item={item}></MainViewsVietAnh>;
        } else {
          return (
            <View>
              <Text>huhu</Text>
            </View>
          );
        }
      }}
      keyExtractor={(item, index) => index}
      contentContainerStyle={Styles.container}
    />
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
    height: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    color: "black",
    width: "100%",
    textAlign: "center",
  },
  alertResult: {
    fontSize: 20,
    fontWeight: 600,
    color: "red",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  inputt: {
    fontSize: 20,
    fontWeight: 500,
    color: "green",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  Button: {
    fontSize: 20,
    borderRadius: 5,
  },
});
