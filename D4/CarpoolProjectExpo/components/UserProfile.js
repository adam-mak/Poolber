import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import InputText from "./InputText";
import { useState } from "react";

const UserProfile = () => {
  // this data should be replaced with a database access
  const originalData = {
    firstName: "John",
    lastName: "Doe",
    username: "JohnDoe123",
    email: "johndoe@poolber.com",
    phoneNumber: "123-456-7890",
  };

  const [currentProfileData, setCurrentProfileData] = useState(originalData);

  const onChangeHandler = (e, attr) => {
    setCurrentProfileData({ ...currentProfileData, [attr]: e });
  };

  const saveChangesHandler = () => {
    console.log("Saved Changes");
    console.log(currentProfileData);
    // Will require a database update
  };

  const discardChangesHandler = () => {
    console.log("Discarded Changes");
    setCurrentProfileData(originalData);
  };

  const deleteAccountHandler = () => {
    console.log("Permanently Deleted Account");
  };

  return (
    <ScrollView style={styles.outerBox}>
      <View style={styles.topBanner}>
        <View style={styles.icons}>
          <Pressable>
            <Image source={require("../assets/images/return_arrow.png")} />
          </Pressable>
          <Text style={styles.editProfile}> Edit Profile </Text>
          <Pressable>
            <Image source={require("../assets/images/share_icon.png")} />
          </Pressable>
        </View>
      </View>
      <View style={styles.profilePicture}>
        <Image source={require("../assets/images/john_doe.png")} />
        <Pressable>
          <Text style={styles.changeProfilePicture}>
            Change Profile Picture
          </Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <InputText
          placeholder="John"
          value={currentProfileData.firstName}
          header="First Name"
          updateStateHandler={onChangeHandler}
          attr="firstName"
        />
        <InputText
          placeholder="Doe"
          value={currentProfileData.lastName}
          header="Last Name"
          updateStateHandler={onChangeHandler}
          attr="lastName"
        />
        <InputText
          placeholder="JohnDoe123"
          value={currentProfileData.username}
          header="Username"
          updateStateHandler={onChangeHandler}
          attr="username"
        />
        <InputText
          placeholder="johndoe@poolber.com"
          value={currentProfileData.email}
          header="Email"
          updateStateHandler={onChangeHandler}
          attr="email"
        />
        <InputText
          placeholder="123-456-7890"
          value={currentProfileData.phoneNumber}
          header="Phone Number"
          updateStateHandler={onChangeHandler}
          attr="phoneNumber"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.saveOrDiscardChanges}>
          <Pressable style={styles.button} onPress={saveChangesHandler}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.button, backgroundColor: "#E16363" }}
            onPress={discardChangesHandler}
          >
            <Text style={styles.buttonText}>Discard Changes</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.deleteAccountButton}
          onPress={deleteAccountHandler}
        >
          <Text style={styles.buttonText}>Permanently Delete Account</Text>
        </Pressable>
      </View>
      <Image
        style={styles.wave}
        source={require("../assets/images/wave.png")}
      />
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  outerBox: {
    flex: 1,
  },
  topBanner: {
    height: 150,
    backgroundColor: "#929FCC",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editProfile: {
    color: "white",
    fontSize: 15,
  },
  profilePicture: {
    width: "100%",
    height: 124,
    position: "absolute",
    top: 90,
    flexDirection: "column",
    alignItems: "center",
  },
  changeProfilePicture: {
    paddingTop: 4,
    fontSize: 16,
  },
  form: {
    marginTop: 94,
    paddingHorizontal: 36,
    justifyContent: "space-evenly",
    height: 350,
  },
  buttonContainer: {
    justifyContent: "space-between",
    height: 100,
    marginTop: 16,
    marginHorizontal: 36,
  },
  saveOrDiscardChanges: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#B69DFE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 22,
  },
  deleteAccountButton: {
    width: 320,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    position: "relative",
    bottom: -20,
  },
});
