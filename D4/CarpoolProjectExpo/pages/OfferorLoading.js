import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const OfferorLoading = ({ navigation, riderName, rideApprox }) => {
  const [isLoading, setIsLoading] = useState(true);

  const returnHandler = () => {
    navigation.goBack();
  };

  const handleConfirmPress = () => {
    setIsLoading(true);
    // Perform confirmation logic here
  };

  const handleDeclinePress = () => {
    setIsLoading(true);
    // Perform decline logic here
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
          <Text style={styles.headerTitle}></Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Share pressed")}>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            source={require("../assets/images/mary_jane.png")}
            style={styles.ellipseImage}
          />
          <Text style={styles.ellipseText}>
            Adding Requester Mary Jane to Your Carpool
          </Text>
        </View>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={82} color="#333" />
            <Text style={styles.loadingText}>
              This will take some time. Please Hold...
            </Text>
            <Text style={styles.loadingSubText}>
              You will be redirected to your ride screen shortly...
            </Text>
          </View>
        ) : (
          <View style={styles.vectorContainer}>
            <Image
              source={require("../assets/images/Vector_1.png")}
              style={styles.vectorImage}
              resizeMode="contain"
            />
          </View>
        )}
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
    padding: 10,
    borderRadius: 10,
    width: 44,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    marginLeft: -5,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  vectorContainer: {
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: "center",
    marginHorizontal: 20,
  },
  vectorImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  ellipseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 500,
    marginHorizontal: 20,
  },
  ellipseImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 100,
    marginLeft: 145,
  },
  ellipseText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  johnDoeText: {
    fontSize: 16,
    marginLeft: 300,
    marginRight: -100,
  },
});

export default OfferorLoading;
