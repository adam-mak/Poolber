import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ArriveAtDestinationPage = ({ navigation }) => {
  const [points, setPoints] = useState(1);
  const [useFreeRide, setUseFreeRide] = useState(false);
  const price = useFreeRide ? 0 : 10;

  // we actually don't need this useEffect hook since the points state
  // will be managed by our database and will never rerender

  useEffect(() => {
    setPoints(points + 1);
  }, []);

  const redeemPointsHandler = () => {
    if (points >= 10) {
      setUseFreeRide(true);
      setPoints(points - 10);
    } else {
      alert("Not enough points to redeem free ride");
    }
  };

  const reviewPassengersHandler = () => {
    navigation.push("RatingPage");
  };

  const returnHomeHandler = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.arrivalText}>
        You have arrived at your destination!
      </Text>
      <Text style={styles.fareText}>Your fare for this ride is:</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {useFreeRide ? "Free ride" : `$${price}`}
        </Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{points} points accumulated</Text>
        <TouchableOpacity
          style={styles.redeemButton}
          onPress={redeemPointsHandler}
        >
          <Text style={styles.redeemButtonText}>
            Redeem a free ride (10 points)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.redeemButton,
            marginTop: 20,
            backgroundColor: "#22b14c",
            width: 250,
          }}
          onPress={() => console.log("Paid upfront")}
        >
          <Text style={{ ...styles.redeemButtonText, color: "white" }}>
            Pay Upfront
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviewAndHome}>
        <TouchableOpacity
          style={styles.reviewPassengersButton}
          onPress={reviewPassengersHandler}
        >
          <Text style={styles.reviewPassengersText}>Review passengers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.returnHomeButton}
          onPress={returnHomeHandler}
        >
          <Text style={styles.returnHomeText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  priceContainer: {
    marginTop: 20,
  },
  priceText: {
    fontFamily: "UberMoveMedium",
    fontSize: 60,
    textAlign: "center",
  },
  pointsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  pointsText: {
    fontFamily: "UberMoveMedium",
    fontSize: 20,
    marginBottom: 30,
  },
  redeemButton: {
    height: 50,
    backgroundColor: "#FFD700",
    borderRadius: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  redeemButtonText: {
    fontFamily: "UberMoveMedium",
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
  reviewPassengersButton: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 40,
    padding: 10,
    justifyContent: "center",
    width: 150,
    backgroundColor: "red",
  },
  reviewPassengersText: {
    fontFamily: "UberMoveMedium",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  reviewAndHome: {
    marginTop: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  returnHomeText: {
    fontFamily: "UberMoveMedium",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  returnHomeButton: {
    height: 50,
    backgroundColor: "black",
    borderRadius: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    width: 150,
  },
  arrivalText: {
    fontFamily: "UberMoveMedium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
  fareText: {
    fontFamily: "UberMoveMedium",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});

export default ArriveAtDestinationPage;
