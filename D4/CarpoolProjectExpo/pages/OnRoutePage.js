import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OnRoutePage = ({ navigation, riderName, rideApprox }) => {
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
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>On Route</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Share pressed")}>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Route1.jpg")}
          style={{
            flex: 1,
            resizeMode: "contain",
            width: undefined,
            height: undefined,
          }}
        />
        <View style={styles.bottomBox}>
          <Text style={styles.infoText}>Distance: 4.7 KM</Text>
          <Text style={styles.infoText}>Time of trip: 7 Minutes</Text>
          <Text style={styles.infoText}>Num of riders: 2 </Text>
          <View style={styles.ellipseContainer}>
            <Image
              source={require("../assets/images/Ellipse_58.png")}
              style={styles.ellipse}
            />
            <Text style={styles.riderName}> John Doe</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 10,
    width: 44,
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
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
  bottomBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  ellipseContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ellipse: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 5,
  },
  riderName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default OnRoutePage;
