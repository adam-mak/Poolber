import { Button, Pressable, StyleSheet, Text, View, Image, TextInput } from "react-native";

import { useState } from "react";

const LoginPage = () => {
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/logo.png")}/>
      </View>
      <View style={styles.sloganContainer}>
        <Text style={styles.text}> Carpool for a better tomorrow. </Text>
      </View>
      <View style={styles.usernameContainer}>
        <Image source={require("../assets/images/username_icon.png")}/>
        <TextInput
          style={styles.usernameField}
          value={usernameText}
          onChangeText={setUsernameText}
        />
      </View>
      <View style={styles.passwordContainer}>
        <Image source={require("../assets/images/password_icon.png")}/>
        <TextInput
          style={styles.passwordField}
          value={passwordText}
          onChangeText={setPasswordText}
        />
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.text}> Sign in </Text>
        <Pressable>
          <Image source={require("../assets/images/advance_button.png")}/>
        </Pressable>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.text}> Register </Text>
        <Pressable>
          <Image source={require("../assets/images/advance_button.png")}/>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 153,
    marginHorizontal: 45,
  },
  logoContainer: {
    alignItems: "center"
  },
  sloganContainer: {
    alignItems: "center",
    marginTop: 22,
  },
  usernameContainer: {
    flexDirection: "row",
    marginTop: 47,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderStyle: "solid",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    marginTop: 45,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderStyle: "solid",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 85,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 31,
  },
  usernameField: {
    marginLeft: 10,
    fontFamily: "Lato",
    fontSize: 15,
  },
  passwordField: {
    marginLeft: 10,
    fontFamily: "Lato",
    fontSize: 15,
  },
  text: {
    fontFamily: "UberMoveBold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default LoginPage;
