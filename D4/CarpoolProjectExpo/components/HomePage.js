import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Poolber</Text>
      </View>

      <View style={styles.requestRideContainer}>
        {/* <Button /> component does not allow for custom styles (unless we wrap it in a <View/> component and apply the styles there).
        For custom styles, use a <Pressable /> component */}
        <Pressable>
          <Image source={require("../assets/images/request_ride_button.png")}/>
        </Pressable>
      </View>

      <View style={styles.offerRideContainer}>
        <Pressable>
          <Image source={require("../assets/images/offer_ride_button.png")}/>
        </Pressable>
      </View>

      <View style={styles.editProfileContainer}>
        <Pressable style={styles.editProfileButton}>
          <Text style={styles.editProfileText}> Edit Profile </Text>
        </Pressable>
      </View>

      <View style={styles.logoutContainer}>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}> Logout </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 45,
  },
  headerContainer: {
    flex: 1,
    marginTop: 50,
  },
  requestRideContainer: {
    flex: 2,
    alignItems: "center",
    marginTop: 50,
  },
  offerRideContainer: {
    flex: 3,
    alignItems: "center",
    marginTop: 200,
  },
  editProfileContainer: {
    flex: 4,
    marginTop: 200,
  },
  logoutContainer: {
    flex: 5,
  },
  headerText: {
    fontFamily: "UberMoveMedium",
    fontSize: 50,
    textAlign: "right",
    height: 50,
  },
  editProfileButton: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 40,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {width: 8, height: 20},
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {width: 8, height: 20},
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
});

export default HomePage;
