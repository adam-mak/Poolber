import { TextInput } from "react-native";
import { StyleSheet, View, Modal, Pressable, Text, Image } from "react-native";

import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";
import { EmailAuthProvider, reauthenticateWithCredential } from "@firebase/auth";

const ConfirmChangesModal = ({ modalVisible, modalHandler, navigation, data }) => {
  const [changesSaved, setChangesSaved] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const confirmationHandler = async () => {
    try {
      const credential = await EmailAuthProvider.credential(data.email, inputPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      setChangesSaved(true);
      setInputPassword("");
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
      });
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        setErrorText("Incorrect Password.")
      } else {
        setErrorText("There was a problem with your request.");
      }
    }
  };

  const cancelHandler = () => {
    modalHandler(!modalVisible);
    setInputPassword("");
  };

  const returnHandler = () => {
    modalHandler(false);
    setChangesSaved(false);
  };

  const returnHomepageHandler = () => {
    modalHandler(false);
    returnHandler();
    navigation.navigate("HomePage");
  };

  console.log(inputPassword);
  const confirmationPage = () => {
    return (
      <>
        <View style={styles.messageContainer}>
          <Text style={styles.header}>Please Confirm Your Changes</Text>
          <View style={styles.newChangesContainer}>
            <Text style={styles.newChangesText}>
              Please enter your password to save these changes. New edits have
              been made to the following sections:
            </Text>
            {/* will probs dynamically render the changed sections later?? - Will we 
			even get to this far lol */}
            <View style={styles.changedSections}>
              <Text style={{ ...styles.newChangesText, fontStyle: "italic" }}>
                First Name
              </Text>
              <Text style={{ ...styles.newChangesText, fontStyle: "italic" }}>
                Last Name
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.confirmPassword}>
          <View style={styles.passwordIcon}>
            <Image source={require("../assets/images/password_icon.png")} />
          </View>
          <TextInput
            placeholder="Password"
            value={inputPassword}
            onChangeText={(e) => setInputPassword(e)}
            secureTextEntry={true}
            multiline={false}
            style={styles.password}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable
            style={{ ...styles.button, backgroundColor: "#E16363" }}
            onPress={cancelHandler}
          >
            <Text style={styles.buttonText}>No, Cancel</Text>
          </Pressable>
          <Pressable style={{ ...styles.button, backgroundColor: "#B69DFE" }}>
            <Text style={styles.buttonText} onPress={confirmationHandler}>
              Yes, Confirm
            </Text>
          </Pressable>
        </View>
        <Text style={[styles.newChangesText, {color: "red", marginTop: 40}]}>{errorText}</Text>
      </>
    );
  };

  const savedChangesPage = () => {
    return (
      <>
        <Pressable
          onPress={returnHandler}
          style={{ position: "absolute", top: 25, right: 25 }}
        >
          <Image source={require("../assets/images/exit_button.png")} />
        </Pressable>

        <View style={styles.savedChangesContainer}>
          <Text style={styles.header}>Your Changes Have Been Saved!</Text>
          <Pressable
            style={{
              ...styles.button,
              backgroundColor: "#B69DFE",
              width: 226,
              height: 44,
            }}
            onPress={returnHomepageHandler}
          >
            <Text style={styles.buttonText}>Return to HomePage</Text>
          </Pressable>
        </View>
      </>
    );
  };

  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modal}>
        {changesSaved ? savedChangesPage() : confirmationPage()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#10606B",
    height: "100%",
    justifyContent: "center",
    opacity: 0.95,
  },
  header: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 33,
    color: "white",
    textAlign: "center",
  },
  savedChangesContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  messageContainer: {
    alignItems: "center",
  },
  newChangesContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 36,
  },
  newChangesText: {
    color: "white",
    fontWeight: 600,
    fontSize: 13,
    textAlign: "center",
  },
  changedSections: {
    marginTop: 8,
  },
  confirmPassword: {
    width: 300,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 48,
  },
  password: {
    width: 240,
  },
  passwordIcon: {
    width: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 26,
    justifyContent: "space-between",
  },
  button: {
    width: 158,
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 15,
  },
});

export default ConfirmChangesModal;
