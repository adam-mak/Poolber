import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const OfferRide = ({ navigation }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");

  const startLocation = navigation.getParam("start");
  const endLocation = navigation.getParam("end");

  const returnToOfferScreenHandler = () => {
    navigation.goBack();
  };

  const selectRequesterHandler = () => {
    navigation.navigate("OfferRideConfirmationPage");
  };

  const proceedRideHandler = () => {
    navigation.navigate("ArrivalPage");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Background.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={returnToOfferScreenHandler}
        >
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
          <Text style={styles.headerTitle}>Offer Ride</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Current Location</Text>
          <Text style={styles.locationInput}>{startLocation}</Text>
        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Destination</Text>
          <Text style={styles.locationInput}>{endLocation}</Text>
        </View>
      </View>

      <View style={styles.peopleOnTheWayContainer}>
        <Text style={styles.peopleOnTheWayText}>Current Requesters</Text>
        <TouchableOpacity
          style={styles.proceedRide}
          onPress={proceedRideHandler}
        >
          <Text style={{ fontWeight: 700, fontSize: 16 }}>
            Proceed with Ride
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ellipseContainer}>
        <View style={styles.ellipseBox}>
          <Image
            source={require("../assets/images/Ellipse_50.png")}
            style={styles.ellipseImage}
          />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>760 Gage St</Text>
            <Text style={styles.ellipseTitle}>10 min detour</Text>
            <Text style={styles.ellipseRideApprox}>Potential Savings: $6</Text>
          </View>
          <TouchableOpacity onPress={selectRequesterHandler}>
            <Image
              source={require("../assets/images/GO.png")}
              style={styles.goImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ellipseBox}>
          <Image
            source={require("../assets/images/Ellipse_52.png")}
            style={styles.ellipseImage}
          />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>2567 Seven St</Text>
            <Text style={styles.ellipseTitle}>8 min detour</Text>
            <Text style={styles.ellipseRideApprox}>Potential Savings: $3</Text>
          </View>
          <TouchableOpacity onPress={selectRequesterHandler}>
            <Image
              source={require("../assets/images/GO.png")}
              style={styles.goImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ellipseBox}>
          <Image
            source={require("../assets/images/Ellipse_58.png")}
            style={styles.ellipseImage}
          />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>Trip to Beach</Text>
            <Text style={styles.ellipseTitle}>5 min detour</Text>
            <Text style={styles.ellipseRideApprox}>Potential Savings: $7</Text>
          </View>
          <TouchableOpacity onPress={selectRequesterHandler}>
            <Image
              source={require("../assets/images/GO.png")}
              style={styles.goImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    alignSelf: "center",
  },
  backButton: {
    padding: 10,
    borderRadius: 10,
    width: 60,
    width: 44,
  },
  backIcon: {
    height: 35,
    borderRadius: 10,
    width: 44,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  shareIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    width: 44,
  },
  topContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    marginBottom: 15,
    width: "48%",
  },
  locationTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  locationInput: {
    height: 80,
    fontSize: 13,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  peopleOnTheWayContainer: {
    marginTop: -15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  peopleOnTheWayText: {
    fontWeight: "bold",
    width: "47.50%",
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#D8BFD8",
    marginVertical: 20,
    textAlign: "center",
  },
  peopleOnTheWayImage: {
    width: 30,
    height: 30,
  },
  ellipseContainer: {
    marginTop: -30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  ellipseBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ellipseImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  ellipseTextContainer: {
    flex: 1,
  },
  ellipseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ellipseRideApprox: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#666",
  },
  goImage: {
    width: 35,
    height: 35,
    borderRadius: 10,
    width: 44,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  circleIcon: {
    width: 20,
    height: 700,
  },
  vectorImage: {
    width: 100,
    height: 70,
  },
  proceedRide: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 44,
    width: "47.50%",
    borderColor: "#D8BFD8",
    backgroundColor: "#B69DFE",
  },
});

export default OfferRide;
