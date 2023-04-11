import { signOut } from "@firebase/auth";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import { auth } from "../firebase";

const HomePage = ({ navigation }) => {
  const editProfileHandler = () => {
    navigation.navigate("UserProfilePage");
  };

  const requestRideHandler = () => {
    navigation.navigate("RequestRidePage");
  };

  const offerRideHandler = () => {
    navigation.navigate("OfferRidePage");
  };

  const logout = async () => {
    try {
      await signOut(auth);

      // this is for testing in the ratings-page
      navigation.navigate("LoginPage");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.bgCurve1Container}>
        <Image source={require("../assets/images/bg_curve_1.png")} />
      </View>
      <View style={styles.bgCurve2Container}>
        <Image source={require("../assets/images/bg_curve_2.png")} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Poolber</Text>
        </View>
        <View style={styles.requestRideContainer}>
          <TouchableOpacity onPress={requestRideHandler}>
            <Image
              source={require("../assets/images/request_ride_button.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.offerRideContainer}>
          <TouchableOpacity onPress={offerRideHandler}>
            <Image source={require("../assets/images/offer_ride_button.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.editProfileContainer}>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={editProfileHandler}
          >
            <Text style={styles.editProfileText}> Edit Profile </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutText}> Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 45,
  },
  headerContainer: {
    marginTop: 50,
  },
  requestRideContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  offerRideContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  editProfileContainer: {
    marginTop: 20,
  },
  logoutContainer: {
    marginTop: 10,
  },
  headerText: {
    fontFamily: "UberMoveMedium",
    fontSize: 50,
    textAlign: "right",
  },
  editProfileButton: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 8, height: 20 },
    justifyContent: "center",
  },
  editProfileText: {
    fontFamily: "UberMoveMedium",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 5,
  },
  logoutButton: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 40,
    justifyContent: "center",
  },
  logoutText: {
    fontFamily: "UberMoveMedium",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 5,
  },
  bgCurve1Container: {
    position: "absolute",
  },
  bgCurve2Container: {
    position: "absolute",
    bottom: -22,
    right: 0,
  },
});

export default HomePage;
