import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const RequestRideConf = ({ navigation, riderName, rideApprox }) => {
  const handleConfirmPress = () => {
    // Handle confirmation logic here
  };

  const handleDeclinePress = () => {
    // Handle decline logic here
  };

  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={returnHandler}>
          <Image
            source={require("../assets/images/return_arrow.png")}
            style={styles.icon}
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
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            Do you wish to continue Requesting A Ride with John Doe worth
            approximately $12?
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
  icon: {
    height: 35,
    borderRadius: 10,
    width: 44,
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

export default RequestRideConf;
