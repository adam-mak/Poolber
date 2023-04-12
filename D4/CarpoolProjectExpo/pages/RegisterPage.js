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
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";

const RegisterPage = ({ navigation }) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");
  const [errorText, setErrorText] = useState("");

  const loginHandler = () => {
    navigation.navigate("LoginPage");
  };

  const createAccount = async () => {
    try {
      if (passwordText === confirmPasswordText) {
        const credentials = await createUserWithEmailAndPassword(auth, usernameText, passwordText);
        await setDoc(doc(db, "users", credentials.user.uid), {
          email: usernameText
        });
        setErrorText("");
      } else {
        setErrorText("Passwords don't match.")
      }
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        setErrorText("Must be a valid email.");
      } else if (e.code === "auth/email-already-in-use") {
        setErrorText("An account with this email already exists.");
      } else {
        setErrorText("There was a problem with your request.");
      }
    }
  }

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo_alt.png")} />
        </View>
        <View style={styles.sloganContainer}>
          <Text style={[styles.text, { fontSize: 30 }]}>Create Account</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Image source={require("../assets/images/username_icon.png")} />
          <TextInput
            style={styles.usernameField}
            value={usernameText}
            onChangeText={setUsernameText}
            placeholder="Email"
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
        <View style={styles.textInputContainer}>
          <Image source={require("../assets/images/password_icon.png")} />
          <TextInput
            style={styles.passwordField}
            value={confirmPasswordText}
            onChangeText={setConfirmPasswordText}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.errorText}> {errorText} </Text>
        <View style={styles.createContainer}>
          <Text style={styles.text}> Create </Text>
          <Pressable onPress={createAccount}>
            <Image source={require("../assets/images/advance_button.png")} />
          </Pressable>
        </View>
        <View style={styles.createContainer}>
          <Text style={styles.text}> Return to Login </Text>
          <Pressable onPress={loginHandler}>
            <Image
              source={require("../assets/images/advance_button.png")}
              style={{ transform: [{ scaleX: -1 }] }}
            />
          </Pressable>
        </View>
      </View>
      <Image
        source={require("../assets/images/bg_curve_3_alt.png")}
        style={styles.bgCurve1Container}
      />
      <Image
        source={require("../assets/images/bg_curve_4_alt.png")}
        style={styles.bgCurve2Container}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
  },
  mainContainer: {
    marginTop: 120,
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
  createContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
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
  errorText: {
    fontFamily: "Lato",
    fontSize: 15,
    color: "#CB0000",
    marginTop: 12,
  },
  bgCurve1Container: {
    position: "absolute",
  },
  bgCurve2Container: {
    position: "relative",
    bottom: 130,
  },
});

export default RegisterPage;
