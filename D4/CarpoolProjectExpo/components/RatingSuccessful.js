import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const RatingSuccessful = ({
  confirmationHandler,
  displayNextHandler,
  navigation,
}) => {
  const returnHomeHandler = () => {
    displayNextHandler(false);
    confirmationHandler(false);
    navigation.navigate("HomePage");
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.nextRiderContainer}>
        <Text style={styles.header}>Your Changes Have Been Saved!</Text>
        <View style={styles.profileCard}>
          <Text style={{ ...styles.header, fontSize: 20, marginBottom: 32 }}>
            Next Rider
          </Text>
          <Image source={require("../assets/images/johnny_appleseed.png")} />
          {/* replace this with props or smth idk lol */}
          <Text style={{ ...styles.header, fontSize: 20, marginTop: 48 }}>
            Johnny Appleseed
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#B69DFE" }}
        >
          <Text style={styles.buttonText}>Next Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#E16363" }}
          onPress={returnHomeHandler}
        >
          <Text style={styles.buttonText}>Skip All Ratings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#10606B",
    height: "100%",
    justifyContent: "center",
    opacity: 0.95,
  },
  header: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 33,
    color: "white",
    textAlign: "center",
  },
  nextRiderContainer: {
    alignItems: "center",
  },
  profileCard: {
    marginTop: 44,
    marginBottom: 56,
  },
  buttonContainer: {
    height: 110,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 28,
  },
  button: {
    height: 44,
    borderRadius: 8,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 700,
    fontSize: 15,
  },
});

export default RatingSuccessful;
