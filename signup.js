import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
export default function Signup() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1600904290455-241ce18f78bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
        }}
        style={styles.imagebackgroundstyle}
        resizeMode="cover"
        blurRadius={0}
      >
        <View style={styles.darkshade}>
          <View style={styles.logocontainer}>
            <Image
              source={require("./assets/bookicon.png")}
              style={styles.iconstyle}
            />
            <Text style={styles.textstyle}>Book Club</Text>
            <View style={styles.inputcontainer}>
              <View style={styles.inputstyle}>
                <TextInput placeholder="Enter your full  Name" />
              </View>
              <View style={styles.inputstyle}>
                <TextInput placeholder="Enter your Phone Number" />
              </View>
              <View style={styles.inputstyle}>
                <TextInput placeholder="Enter your Email" />
              </View>

              <View style={styles.inputstyle}>
                <TextInput placeholder="Enter your Password" />
              </View>
              <View
                style={{
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "tomato", fontWeight: "bold" }}>
                  Don't have an account? Signup
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "tomato",
                borderRadius: 8,
                width: 150,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagebackgroundstyle: {
    flex: 1,
  },
  iconstyle: {
    width: 100,
    height: 100,
  },
  textstyle: {
    fontSize: 25,
    color: "tomato",

    bottom: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontStyle: "italic",
  },
  darkshade: {
    backgroundColor: "#000000c0",

    flex: 1,
    alignItems: "center",
  },
  logocontainer: {
    position: "absolute",
    top: 40,

    alignItems: "center",
  },
  inputstyle: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 8,
    width: 300,
    opacity: 0.8,
  },
  inputcontainer: {
    padding: 10,
  },
});
