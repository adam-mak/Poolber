import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Banner2 from "../components/Banner2";
import Map from "../components/Map";

export default function OfferorStage1Page({ navigation }) {
  const setupCarpoolHandler = () => {
    navigation.push("AwaitRideStartPage");
  };

  return (
    <View style={styles.container}>
      <Banner2 pageTitle="Where to?" navigation={navigation} />

      <Map />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={setupCarpoolHandler}
      >
        <Text style={styles.buttonText}>Setup Carpool Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
