import React, { useState, Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function excercise(route) {
  const Type = () => {
    return route.route.params.type == "AV"
      ? "Anh-Việt"
      : route.route.params.type == "VA"
      ? "Việt-Anh"
      : "Luyện Nghe";
  };
  // console.log(random());
  // console.log(Exercise[0][content]);

  // const [QuizNum, setQuizNum] = useState(-1);
  // const ArrQuizNum = random();
  // const CurrentQuiz = () => {
  //   setQuizNum += 1;
  //   return ArrQuizNum[QuizNum];
  // };
  // const CurrentQuiz = CurrentQuizTmp[0]
  // console.log(CurrentQuiz);

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

  const [currentQuestion, setCurrentQuestionTmp] = useState(0);

  const QuestionNumArr = random();

  const Url = () => {
    return route.route.params.id
      ? "http://localhost:3000/exerciseunit" +
          route.route.params.id +
          "DB?id=" +
          QuestionNumArr[currentQuestion]
      : null;
  };

  const [isLoading, setLoading] = useState(true);
  const [Exercise, setData] = useState([]);
  React.useEffect(() => {
    fetch(Url())
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // const [alertText, onAlert] = React.useState("");
  const Input = ({ item }) => {
    const [text, onChangeText] = React.useState(null);
    const [Wrong, onChangeWrong] = React.useState("");
    let CheckPress = "not";

    const PressButton = ({ item }) => {
      if (CheckPress == "yes") {
        CheckPress = "not";
        console.log(CheckPress);
        console.log(text);
        console.log(item.eng);
        text == item.eng ? onChangeWrong("Uay gioi the dung roi ban e") : onChangeWrong("Sai roi phai la " + item.eng + " ma`");
      } else {
        return "";
      }
    };
    // console.log(PressButton({item}))

    const NextButton = () => {
      setCurrentQuestionTmp({ currentQuestion } + 1);
      return Url();
    };

    return route.route.params.type == "AV" ? (
      <View style={Styles.container}>
        <Text style={Styles.title}>{item.eng}</Text>

        <Text> {Wrong} </Text>

        <TextInput
          placeholder="Type Your Answer"
          style={{ borderWidth: 2 }}
          onChangeText={onChangeText}
          // onBlur={onChangeText}
        ></TextInput>
        <Text>{text}</Text>

        <Button
          title="click Me"
          onPress={() => {
            CheckPress = "yes";
            console.log(CheckPress);
            PressButton({ item });
          }}
        ></Button>
      </View>
    ) : route.route.params.type == "VA" ? (
      <View style={Styles.container}>
        <View style={Styles.container}>
          <Text style={Styles.title}>{item.vi}</Text>

          <Text> {Wrong} </Text>

          <TextInput
            placeholder="Type Your Answer"
            style={{ borderWidth: 2 }}
            onChangeText={onChangeText}
            // onBlur={onChangeText}
          ></TextInput>
          <Text>{text}</Text>

          <Button
            title="click Me"
            onPress={() => {
              CheckPress = "yes";
              console.log(CheckPress);
              PressButton({ item });
            }}
          ></Button>
        </View>
      </View>
    ) : (
      <View>
        <Text>Chua Lam</Text>
      </View>
    );
  };

  const CheckResult = ({ item }) => {};

  return (
    <View style={Styles.container}>
      <FlatList
        data={Exercise}
        renderItem={({ item, index }) => {
          // console.log(item);
          return <Input item={item}></Input>;
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    color: "black",
    width: "100%",
    textAlign: "center",
  },
});
