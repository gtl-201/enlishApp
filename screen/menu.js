import React from "react"
import {Text,View} from "react-native"



export default function Menu(props){
    const { navigation } = props;

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerTitleStyle: {
          textAlign: "center",
          color: "#1ba1ff",
          fontSize: 28,
        },
      });
    }, [navigation]); 

    return <View><Text>Hihi</Text></View>
    
}
