import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

const ThanksForRidingPage = ({ navigation }) => {
  const reviewPassengersHandler = () => {
    navigation.navigate("RatingPage");
  };

  const returnHomeHandler = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.header}>Thanks for Riding with Poolber!</Text>
      <View>
        <Text style={styles.sentences}>
          Thank you for using our carpool app service. We hope that you had a
          pleasant and convenient experience while using our platform.{"\n"}
        </Text>
        <Text style={styles.sentences}>
          By choosing to carpool, you not only saved money on transportation but
          also contributed towards reducing carbon emissions and traffic
          congestion. Your effort towards a sustainable future is truly
          appreciated. {"\n"}
        </Text>
        <Text style={styles.sentences}>
          We would love to hear your feedback on your recent experience with our
          app. Please feel free to share your thoughts and suggestions on how we
          can improve our service in the future. {"\n"}
        </Text>
        <Text style={styles.sentences}>
          Thank you again for choosing our carpool app service. We look forward
          to serving you again in the future. {"\n"}
        </Text>
      </View>
      <Image
        source={require("../assets/images/logo_alt.png")}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={reviewPassengersHandler}
          style={{ ...styles.button, backgroundColor: "#B69DFE" }}
        >
          <Text style={styles.buttonText}>Review Passengers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={returnHomeHandler}
          style={{ ...styles.button, backgroundColor: "#E16363" }}
        >
          <Text style={styles.buttonText}>Return To Home Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#10606B",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 32,
  },
  sentences: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  logo: {
    marginVertical: 32,
  },
  buttonContainer: {
    width: 226,
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 44,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 700,
    fontSize: 15,
    color: "white",
  },
});

export default ThanksForRidingPage;
