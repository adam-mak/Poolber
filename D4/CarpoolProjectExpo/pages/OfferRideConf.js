import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OfferRideConf = ({ navigation, riderName, rideApprox }) => {
  const returnHandler = () => {
    navigation.goBack();
  };
  const handleConfirmPress = () => {
    // Handle confirmation logic here
  };

  const handleDeclinePress = () => {
    // Handle decline logic here
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={returnHandler}>
          <Image
            source={require("../assets/images/return_arrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}> Request Confirmation</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Share pressed")}>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            Do you wish to continue Offering A Ride with John Doe, Saving you
            approximately $4?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmPress}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.declineButton}
              onPress={handleDeclinePress}
            >
              <Text style={styles.buttonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vectorContainer}>
          <Image
            source={require("../assets/images/Vector_1.png")}
            style={styles.vectorImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#929FCC",
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 44,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  shareIcon: {
    width: 35,
    height: 35,
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  confirmationText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  confirmButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  declineButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  // Add this line to move the logoContainer to the right
});

export default OfferRideConf;
