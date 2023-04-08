import {
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

import { useState } from "react";

const LoginPage = ({ navigation }) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const loginHandler = () => {
    navigation.push("HomePage");
  };

  const registerHandler = () => {
    navigation.push("RegisterPage");
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View style={styles.sloganContainer}>
          <Text style={styles.text}> Carpool for a better tomorrow. </Text>
        </View>
        <View style={styles.textInputContainer}>
          <Image source={require("../assets/images/username_icon.png")} />
          <TextInput
            style={styles.usernameField}
            value={usernameText}
            onChangeText={setUsernameText}
            placeholder="Username"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Image source={require("../assets/images/password_icon.png")} />
          <TextInput
            style={styles.passwordField}
            value={passwordText}
            onChangeText={setPasswordText}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.text}> Sign in </Text>
          <Pressable onPress={loginHandler}>
            <Image source={require("../assets/images/advance_button.png")} />
          </Pressable>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.text}> Register </Text>
          <Pressable onPress={registerHandler}>
            <Image source={require("../assets/images/advance_button.png")} />
          </Pressable>
        </View>
      </View>
      <View style={styles.bgCurve1Container}>
        <Image source={require("../assets/images/bg_curve_3.png")} />
      </View>
      <View style={styles.bgCurve2Container}>
        <Image source={require("../assets/images/bg_curve_4.png")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
  },
  mainContainer: {
    marginTop: 153,
    marginHorizontal: 45,
  },
  logoContainer: {
    alignItems: "center",
  },
  sloganContainer: {
    alignItems: "center",
    marginTop: 22,
  },
  textInputContainer: {
    flexDirection: "row",
    marginTop: 45,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 85,
    gap: 15,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 31,
    gap: 15,
  },
  usernameField: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato",
    fontSize: 15,
  },
  passwordField: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato",
    fontSize: 15,
  },
  text: {
    fontFamily: "UberMoveBold",
    fontSize: 24,
    textAlign: "center",
  },
  bgCurve1Container: {
    position: "absolute",
  },
  bgCurve2Container: {
    position: "relative",
    bottom: 160,
  },
});

export default LoginPage;
