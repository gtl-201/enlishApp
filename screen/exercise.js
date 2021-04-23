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
  const [numRight, setNumRight] = React.useState([]);
  const [numWrong, setNumWrong] = React.useState([]);

  const Result = () => {
    let total = numWrong.length + numRight.length;
    let record = (numRight.length / total) * 100;
    return (
      <View style={{ justifyContent: "center",alignItems:"center", padding: 15 }}>
        <Text style={[Styles.title],{fontSize:20}}>Completed</Text>
        {record > 80 ? (
          <Text style={[Styles.percent, { color: "#12ff12" }]}>
            {Math.ceil(record)}%
          </Text>
        ) : record > 60 ? (
          <Text style={[Styles.percent, { color: "#ff6a00" }]}>
            {Math.ceil(record)}%
          </Text>
        ) : (
          <Text style={[Styles.percent, { color: "red" }]}>
            {Math.ceil(record)}%
          </Text>
        )}

        <Text style={[Styles.finalRight]}>
          Right: {numRight.length}/{total}
        </Text>
      </View>
    );
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
    } else {
      return (
        "http://localhost:3000/exerciseunit" + route.route.params.id + "DB"
      );
    }
  };
  // console.log(QuestionNumArr[currentQuestion])
  console.log(QuestionNumArr);
  console.log(currentQuestion);
  console.log(Url());

  const [isLoading, setLoading] = useState(true);
  const [Exercise, setData] = useState([]);

  const put = () => {
    if (isLoading == true) {
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
    const [right, setRight] = React.useState(0);

    const PressButton = ({ item }) => {
      if (CheckPress == "yes") {
        CheckPress = "not";
        // console.log(CheckPress);
        // console.log(text);
        // console.log(item.eng);

        // text == item.eng
        //   ? onChangeAlertResult("Uay gioi the dung roi ban e")
        //   : onChangeAlertResult("Sai roi phai la " + item.eng + " ma`")
        if (text == item.eng) {
          setRight(1);
          onChangeAlertResult("Uay gioi the dung roi ban e");
          numRight.push(item.id);
        } else {
          setRight(2);
          onChangeAlertResult("Sai roi phai la " + item.eng + " ma`");
          numWrong.push(item.id);
        }
      } else {
        onChangeAlertResult("");
      }
      // console.log(right + "xxx");
    };
    // console.log(right + "xxx");
    console.log(numRight);
    console.log(numWrong);
    //END CHECK AlertResult OR RIGHT

    if (currentQuestion < QuestionNumArr.length) {
      return (
        <View style={Styles.container}>
          <View>
            <Text style={[Styles.title, { textTransform: "capitalize" }]}>
              {item.vi}
            </Text>

            <TextInput
              placeholder="Type Your Answer"
              style={{ borderWidth: 2 }}
              onChangeText={onChangeText}
              style={Styles.inputt}
            ></TextInput>

            {right == 1 ? (
              <View
                style={[
                  {
                    backgroundColor: "#2bff1880",
                    borderColor: "#00d600d4",
                  },
                  Styles.AlrertBox,
                ]}
              >
                <Text style={[Styles.alertResult, { color: "black" }]}>
                  {AlertResult}
                </Text>
                <Text style={[Styles.alertResult, { color: "#ff5e00" }]}>
                  {item.na}
                </Text>
                <Image
                  source="https://i.pinimg.com/originals/4d/26/83/4d2683793138a73fa25e57773006f3c0.png"
                  style={{ height: 100, width: 100, textAlign: "center" }}
                ></Image>
              </View>
            ) : right == 2 ? (
              <View
                style={[
                  {
                    backgroundColor: "#ff000033",
                    borderColor: "#ff000087",
                  },
                  Styles.AlrertBox,
                ]}
              >
                <Text style={[Styles.alertResult, { color: "black" }]}>
                  {AlertResult}
                </Text>
                <Text style={[Styles.alertResult, { color: "red" }]}>
                  {item.na}
                </Text>
                <Image
                  source="https://i.pinimg.com/originals/06/a9/71/06a9710220271892169d285f7b993742.png"
                  style={{ height: 100, width: 100, textAlign: "center" }}
                ></Image>
              </View>
            ) : (
              ""
            )}
          </View>

          {/* {console.log(route.route.params.id)} */}

          {AlertResult != "" ? Next : Check}
        </View>
      );
    } else {
    }
  };

  return currentQuestion < QuestionNumArr.length ? (
    <View style={Styles.container}>
      {Exercise.map((item) => {
        if (route.route.params.type == "VA") {
          return (
            <MainViewsVietAnh
              item={item}
              style={Styles.container}
            ></MainViewsVietAnh>
          );
        } else {
          return (
            <View>
              <Text>huhu</Text>
            </View>
          );
        }
      })}
    </View>
  ) : (
    <Result></Result>
  );
}

const Styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 27,
    fontWeight: 700,
    color: "black",
    width: "100%",
    textAlign: "center",
    marginTop: 10,
  },
  alertResult: {
    fontSize: 20,
    fontWeight: 600,
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
  AlrertBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  percent: {
    fontSize: 27,
    fontWeight: 600,
    marginTop: 5,
  },
  finalRight: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
  },
});
