import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const RequestRide = ({ navigation }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const [startName, setStartName] = useState("");
  const [endName, setEndName] = useState("");

  const [dateTime, setDateTime] = useState("");

  const submitRequestHandler = () => {
    navigation.navigate("RequestRideConfirmationPage");
  };

  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Background.png")}
        style={styles.backgroundImage}
      />

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
          <Text style={styles.headerTitle}>Request Ride</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        <View style={styles.autoBox}>
          <GooglePlacesAutocomplete
            placeholder={"Pickup Location"}
            fetchDetails
            onPress={(data, details) => {
              const position = {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              };
              setPickupLocation(position);
              setStartName(data.description);
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            styles={styles.autocomplete}
          />
        </View>
        <View style={styles.autoBox}>
          <GooglePlacesAutocomplete
            placeholder={"Destination"}
            fetchDetails
            onPress={(data, details) => {
              const position = {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              };
              setDestination(position);
              setEndName(data.description);
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            styles={styles.autocomplete}
          />
        </View>
      </View>

      {startName && endName && (
        <View style={styles.ellipseContainer}>
          <View style={styles.ellipseBox}>
            <Image
              source={require("../assets/images/Ellipse_50.png")}
              style={styles.ellipseImage}
            />
            <View style={styles.ellipseTextContainer}>
              <Text style={styles.ellipseTitle}>760 Gage St</Text>
              <Text style={styles.ellipseRideApprox}>Ride Approx: $20</Text>
            </View>
            <TouchableOpacity onPress={submitRequestHandler}>
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
              <Text style={styles.ellipseRideApprox}>Ride Approx: $12</Text>
            </View>
            <TouchableOpacity onPress={submitRequestHandler}>
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
              <Text style={styles.ellipseRideApprox}>Ride Approx: $15</Text>
            </View>
            <TouchableOpacity onPress={submitRequestHandler}>
              <Image
                source={require("../assets/images/GO.png")}
                style={styles.goImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
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
  backButton: {
    padding: 10,
    borderRadius: 10,
    width: 44,
  },
  backIcon: {
    width: 35,
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
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  autoBox: {
    marginTop: 10,
    flexDirection: "row",
  },
  ellipseContainer: {
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
    marginHorizontal: 20,
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  autocomplete: {
    textInput: {
      backgroundColor: "#FFFFFF",
      height: 40,
      borderRadius: 12,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      fontSize: 15,
      flex: 1,
    },
  },
});

export default RequestRide;
