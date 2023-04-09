import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";


const RequestOffer = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");


  const handleRequestRide = () => {
    // handle ride request here
  };


  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Background.png")} style={styles.backgroundImage} />


      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require("../assets/images/Return_to_HomePage.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>Request Offer</Text>
        <TouchableOpacity>
          <Image source={require("../assets/images/Share_Icon.png")} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>


      <View style={styles.topContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Current Location</Text>
          <TextInput
            style={styles.locationInput}
            placeholder="128 Main Street"
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
        </View>


        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Destination</Text>
          <TextInput
            style={styles.locationInput}
            placeholder="2000 Seven St"
            value={destination}
            onChangeText={setDestination}
          />
        </View>
      </View>


      <View style={styles.ellipseContainer}>
        <View style={styles.ellipseBox}>
          <Image source={require("../assets/images/Ellipse_50.png")} style={styles.ellipseImage} />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>760 Gage St</Text>
            <Text style={styles.ellipseRideApprox}>Ride Approx: $20</Text>
          </View>
          <Image source={require("../assets/images/GO.png" )} style={styles.goImage} />
        </View>


        <View style={styles.ellipseBox}>
          <Image source={require("../assets/images/Ellipse_52.png")} style={styles.ellipseImage} />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>2567 Seven St</Text>
            <Text style={styles.ellipseRideApprox}>Ride Approx: $12</Text>
          </View>
          <Image source={require("../assets/images/GO.png" )} style={styles.goImage} />
        </View>


        <View style={styles.ellipseBox}>
          <Image source={require("../assets/images/Ellipse_58.png")} style={styles.ellipseImage} />
          <View style={styles.ellipseTextContainer}>
            <Text style={styles.ellipseTitle}>Trip to Beach</Text>
            <Text style={styles.ellipseRideApprox}> Ride Approx: $15</Text>
          </View>
          <Image source={require("../assets/images/GO.png" )} style={styles.goImage} />
        </View>
      </View>


      <View style={styles.vectorContainer}>
        <Image source={require("../assets/images/Vector_1.png" )} style={styles.vectorImage} />
      </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  shareIcon: {
    width: 20,
    height: 20,
  },
  topContainer: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  locationContainer: {
    marginBottom: 20,
  },
  locationTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  locationInput: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  ellipseContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  ellipseBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
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
    fontWeight: 'bold',
  },
  ellipseRideApprox: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  goImage: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  circleIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  barIcon: {
    width: 50,
    height: 5,
    marginHorizontal: 10,
  },
  vectorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  vectorImage: {
    width: 350,
    height: 118,
  },
  ellipseContainer: {
    flexDirection: 'column',
    marginTop: 0,
  },
 headerTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
},
logoContainer: {
  flexDirection: 'column',
  alignItems: 'center',
},
});






export default RequestOffer;

