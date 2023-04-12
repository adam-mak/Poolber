import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const LoginPage = ({ navigation }) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [errorText, setErrorText] = useState("");

  const loginHandler = () => {
    navigation.navigate("HomePage");
  };

  const registerHandler = () => {
    navigation.navigate("RegisterPage");
  };

  const logoutHandler = () => {
    navigation.navigate("LoginPage");
  };

  const viewLegalTermsHandler = () => {
    navigation.navigate("LegalTermsPage");
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, usernameText, passwordText);
      setErrorText("");
    } catch (e) {
      if (e.code === "auth/invalid-email" || e.code === "auth/wrong-password") {
        setErrorText("Username/password incorrect. Try again.");
      } else if (e.code === "auth/user-not-found") {
        setErrorText("There is no account under this username.");
      } else {
        setErrorText("There was a problem with your request.");
      }
    }
  };

  /* This covers navigation logic for all pages relating to authentication */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        loginHandler();
      } else {
        logoutHandler();
      }
    });
    return unsubscribe;
  }, []);

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
            placeholder="Username/Email"
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
        <Text style={styles.errorText}> {errorText} </Text>
        <View style={styles.signInContainer}>
          <Text style={styles.text}> Sign in </Text>
          <TouchableOpacity onPress={loginUser}>
            <Image source={require("../assets/images/advance_button.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.text}> Register </Text>
          <TouchableOpacity onPress={registerHandler}>
            <Image source={require("../assets/images/advance_button.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.text}> View Legal Terms </Text>
          <TouchableOpacity onPress={viewLegalTermsHandler}>
            <Image source={require("../assets/images/advance_button.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("../assets/images/bg_curve_3.png")}
        style={styles.bgCurve1Container}
      />
      <Image
        source={require("../assets/images/bg_curve_4.png")}
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
    marginTop: 30,
    gap: 15,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
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
    bottom: 160,
  },
});

export default LoginPage;
