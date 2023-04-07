import { Pressable, StyleSheet, Text, View, Image } from "react-native";

import InputText from "./InputText";

const UserProfile = () => {
  return (
    <View style={styles.outerBox}>
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
        <InputText placeholder="John" header="First Name" />
        <InputText placeholder="Doe" header="Last Name" />
        <InputText placeholder="JohnDoe123" header="Username" />
        <InputText placeholder="johndoe@poolber.com" header="Email" />
        <InputText placeholder="123-456-7890" header="Phone Number" />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.saveOrDiscardChanges}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </Pressable>
          <Pressable style={{ ...styles.button, backgroundColor: "#E16363" }}>
            <Text style={styles.buttonText}>Discard Changes</Text>
          </Pressable>
        </View>
        <Pressable style={styles.deleteAccountButton}>
          <Text style={styles.buttonText}>Permanently Delete Account</Text>
        </Pressable>
      </View>
      <Image
        style={styles.wave}
        source={require("../assets/images/wave.png")}
      />
    </View>
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
    position: "absolute",
    bottom: -20,
  },
});
