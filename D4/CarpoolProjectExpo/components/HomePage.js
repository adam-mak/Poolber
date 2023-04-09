import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.homePageContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.editProfileButton}>
          <Button title="Edit Profile" />
        </View>
      </View>

      <View style={styles.imagesContainer}>
        <Image
          source={require("../assets/images/offer_carpool.jpg")}
          style={styles.images}
        />
        <Image
          source={require("../assets/images/request_carpool.png")}
          style={styles.images}
        />
      </View>

      {/* We cannot adjust the border-radius of the buttons here but we can do it with the <Pressable /> component below */}
      <View style={styles.rideContainer}>
        <Button title="Initiate a Ride" />
        <Button title="Request a Ride" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    marginVertical: 28,
    justifyContent: "space-between",
    height: "90%",
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  logo: {
    flex: 1,
    top: 120,
    resizeMode: 'contain'
  },
  editProfileButton: {
    marginTop: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  images: {
    width: "40%",
    height: "80%",
  },
  rideContainer: {
    flexDirection: "row",
    marginVertical: 16,
    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logoutButton: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "red",
    height: 40,
    width: "40%",
    borderRadius: 16,
    color: "#FFF",
  },
});

export default HomePage;
