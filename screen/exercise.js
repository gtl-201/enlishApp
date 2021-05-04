import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function excercise(route) {
  // playRight()
  const Type = () => {
    return route.route.params.type == "AV"
      ? "Anh-Việt"
      : route.route.params.type == "VA"
      ? "Việt-Anh"
      : "Luyện Nghe";
  };

  const [numRight, setNumRight] = React.useState([]);
  const [numWrong, setNumWrong] = React.useState([]);

  //START VA RESULT
  const Result = () => {
    let total = numWrong.length + numRight.length;
    let record = (numRight.length / total) * 100;
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 15 }}
      >
        <Text style={([Styles.title], { fontSize: 20 })}>Completed</Text>
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
  //END VA RESULT

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

  const ran = () => {
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

  const randomWrong = () => {
    var numsWrong = [0, 1, 2, 3, 4, 5, 6],
      ranWrong = [],
      i = numsWrong.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * i);
      ranWrong.push(numsWrong[j]);
      numsWrong.splice(j, 1);
    }
    return ranWrong;
  };
  // console.log(randomWrong())

  const [QuestionNumArr, setQuestionNumArr] = React.useState(ran());

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const Url = () => {
    if (currentQuestion < QuestionNumArr.length) {
      return route.route.params.id
        ? "https://my-json-server.typicode.com/gtl-201/serverJson" +
            "/exerciseUnit" +
            route.route.params.id +
            "DB?id=" +
            QuestionNumArr[currentQuestion]
        : null;
    } else {
      return (
        "https://my-json-server.typicode.com/gtl-201/serverJson" +
        "/exerciseUnit" +
        route.route.params.id +
        "DB"
      );
    }
  };
  // console.log(QuestionNumArr[currentQuestion])
  // console.log(QuestionNumArr);
  // console.log(currentQuestion);
  // console.log(Url());

  //START FETCH JSON
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

  //START NEXT BUTTON
  const Next = (
    <Button
      title="Tiếp Tục"
      onPress={() => {
        setCurrentQuestion(currentQuestion + 1);
        Url();
        setLoading(true);
        put();
        onChangeTextVi(null);
        onChangeRandomIndex(Math.floor(Math.random() * (4 + 0)));
      }}
      color="#00ce00"
    ></Button>
  );
  //END NEXT BUTTON

  const MainViewsVietAnh = ({ item }) => {
    const [text, onChangeText] = React.useState(null);
    const [AlertResult, onChangeAlertResult] = React.useState(null);
    const [Guide, onChangeGuid] = React.useState(null);

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
      ></Button>
    );
    //END CHECK BUTTON

    //START CHECK AlertResult OR RIGHT
    const [right, setRight] = React.useState(0);

    const PressButton = ({ item }) => {
      if (CheckPress == "yes") {
        CheckPress = "not";
        if (text == item.eng) {
          setRight(1);
          onChangeAlertResult("dảk dảk bruh bruh lmao chính xác");
          numRight.push(item.id);
        } else {
          setRight(2);
          onChangeAlertResult("Sai rồi phải là '" + item.eng + "' nhé");
          numWrong.push(item.id);
        }
      } else {
        onChangeAlertResult(null);
      }
      // console.log(right + "xxx");
    };
    // console.log(right + "xxx");
    // console.log(numRight);
    // console.log(numWrong);
    //END CHECK AlertResult OR RIGHT

    if (currentQuestion < QuestionNumArr.length) {
      const string = item.eng;
      // const usingSplit = string.split("");
      // const usingSpread = [...string];
      const usingArrayFrom = Array.from(string);
      // const usingObjectAssign = Object.assign([], string);
      console.log(usingArrayFrom);

      //START Guide View
      const [ranIndex1, onchangeRanIndex1] = React.useState(
        Math.floor(Math.random() * (string.length + 0))
      );
      const [ranIndex2, onchangeRanIndex2] = React.useState(
        Math.floor(Math.random() * (string.length + 0))
      );
      const [ranIndex3, onchangeRanIndex3] = React.useState(
        Math.floor(Math.random() * (string.length + 0))
      );
      console.log(ranIndex1)
      console.log(ranIndex2)
      console.log(ranIndex3)


      let i = 0
      let TextTmp = ""
      const [textt,onChangeTextt] = React.useState(null)
      for (i = 0; i < string.length; i++) {
        if (ranIndex1 == i || ranIndex2 == i || ranIndex3 == i) {
          TextTmp = TextTmp.concat(usingArrayFrom[i])
        } else {
          TextTmp = TextTmp.concat("_")
        }
      }
      // onChangeTextt(TextTmp)

      const GuideViewer = (
        <View style={{textAlign:"center"}}>
          <Text style={{color:"#ff264c",fontWeight:"600",fontSize:25,letterSpacing:1.5}}> {TextTmp}</Text>
        </View>
      );
      //END GUIDE VIEW

      return (
        <View style={Styles.container}>
          <View>
            <Text style={[Styles.title, { textTransform: "capitalize" }]}>
              {item.vi}
            </Text>

            {Guide != null ? GuideViewer : null}

            <TextInput
              placeholder="Type Your Answer"
              onChangeText={onChangeText}
              style={Styles.inputt}
            ></TextInput>

            {right == 1 ? (
              <View
                style={[
                  {
                    backgroundColor: "#2bff2b45",
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
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/4d/26/83/4d2683793138a73fa25e57773006f3c0.png",
                  }}
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
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/06/a9/71/06a9710220271892169d285f7b993742.png",
                  }}
                  style={{ height: 100, width: 100, textAlign: "center" }}
                ></Image>
              </View>
            ) : null}
          </View>

          <View style={{ position: "absolute", bottom: 40, right: 10 }}>
            <TouchableOpacity
              onPress={() =>
                Guide != null ? onChangeGuid(null) : onChangeGuid("viewed")
              }
            >
              <Icon size={30} name="eye-outline"></Icon>
            </TouchableOpacity>
          </View>

          {/* {console.log(route.route.params.id)} */}

          {AlertResult != null ? Next : Check}
        </View>
      );
    } else {
    }
  };
  // const WrongChoose = ;
  const [WrongChoose, onChangeWrongChoose] = React.useState(randomWrong());
  // const randomIndex = Math.floor(Math.random() * (4 + 0));
  const [randomIndex, onChangeRandomIndex] = React.useState(
    Math.floor(Math.random() * (4 + 0))
  );
  const [textVi, onChangeTextVi] = React.useState(null);

  // console.log(WrongChoose);

  const CheckVi = ({ item }) => {
    if (textVi != null) {
      if (textVi == item.vi) {
        numRight.push(item.id);
        return (
          <View style={[Styles.container, { height: "70%" }]}>
            <View>
              <View
                style={[
                  {
                    backgroundColor: "#2bff2b45",
                    borderColor: "#00d600d4",
                  },
                  Styles.AlrertBox,
                ]}
              >
                <Text style={[Styles.alertResult, { color: "black" }]}>
                  Chuẩn rồi chuẩn rồi hie hie
                </Text>
                <Text style={[Styles.alertResult, { color: "#ff5e00" }]}>
                  {item.vi}
                </Text>
                <Image
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/4d/26/83/4d2683793138a73fa25e57773006f3c0.png",
                  }}
                  style={{ height: 100, width: 100, textAlign: "center" }}
                ></Image>
              </View>
            </View>
          </View>
        );
      } else {
        numWrong.push(item.id);
        return (
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
              Bạn đen thôi phải là '{item.vi}' nhé
            </Text>
            <Text style={[Styles.alertResult, { color: "red" }]}>
              {item.na}
            </Text>
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/originals/06/a9/71/06a9710220271892169d285f7b993742.png",
              }}
              style={{ height: 100, width: 100, textAlign: "center" }}
            ></Image>
          </View>
        );
      }
    } else {
      return null;
    }
  };
  // console.log(numRight)
  // console.log(numWrong)
  // console.log(randomIndex + "xxxx");
  const MainViewsAnhViet = ({ item }) => {
    if (currentQuestion < QuestionNumArr.length) {
      return (
        <View style={Styles.container}>
          <View>
            <View>
              <Text style={[Styles.title, { textTransform: "capitalize" }]}>
                {item.eng}
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "600",
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                /{item.na}/
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "400",
                  marginBottom: 5,
                }}
              >
                ---= Tab To Your Answer =---
              </Text>
            </View>

            {textVi == null ? (
              randomIndex == 0 ? (
                <View>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() => onChangeTextVi(item.vi)}
                  >
                    <Text style={Styles.chooseTitle}>{item.vi}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[0]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[0]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[1]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[1]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[2]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[2]].content}</Text>
                  </TouchableOpacity>
                </View>
              ) : randomIndex == 1 ? (
                <View>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[0]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[0]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() => onChangeTextVi(item.vi)}
                  >
                    <Text style={Styles.chooseTitle}>{item.vi}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[1]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[1]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[2]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[2]].content}</Text>
                  </TouchableOpacity>
                </View>
              ) : randomIndex == 2 ? (
                <View>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[0]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[0]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[1]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[1]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() => onChangeTextVi(item.vi)}
                  >
                    <Text style={Styles.chooseTitle}>{item.vi}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[2]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[2]].content}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[0]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[0]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[1]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[1]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() =>
                      onChangeTextVi(item.wrongVi[WrongChoose[2]].content)
                    }
                  >
                    <Text style={Styles.chooseTitle}>{item.wrongVi[WrongChoose[2]].content}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.chosseBox}
                    onPress={() => onChangeTextVi(item.vi)}
                  >
                    <Text style={Styles.chooseTitle}>{item.vi}</Text>
                  </TouchableOpacity>
                </View>
              )
            ) : (
              <CheckVi item={item}></CheckVi>
            )}
          </View>
          {textVi != null ? Next : null}
        </View>
      );
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
        } else if (route.route.params.type == "AV") {
          return (
            <MainViewsAnhViet
              item={item}
              style={Styles.container}
            ></MainViewsAnhViet>
          );
        } else {
          return (
            <View>
              <Text>Listen Baby</Text>
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
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    width: "100%",
    textAlign: "center",
    marginTop: 10,
  },
  alertResult: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  inputt: {
    fontSize: 20,
    fontWeight: "500",
    color: "#052b00",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#00000003",
  },
  AlrertBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height:"80%",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  percent: {
    fontSize: 27,
    fontWeight: "600",
    marginTop: 5,
  },
  finalRight: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
  chosseBox: {
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: "#8080808f",
    backgroundColor: "#fcfcfc30",
    borderRadius: 8,
    textAlign: "center",
  },
  chooseTitle:{
    fontSize:20,
    fontWeight:"700",
    color:"#000000e3",
    textTransform:"capitalize"
  }
});
