import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
} from "react-native";

import RatingSuccessful from "./RatingSuccessful";

/* Take in as props: {name, stars, comment} */
const RatingConfirmation = ({
  confirmation,
  confirmationHandler,
  displayNext,
  displayNextHandler,
  navigation,
}) => {
  const confirmedRatingHandler = () => {
    displayNextHandler(true);
    confirmationHandler(false);
  };

  return (
    // pass the data down here as props or smth lol or
    // use the navigation stack to transmit data

    <Modal
      visible={confirmation || displayNext}
      animationType="fade"
      transparent={true}
    >
      {displayNext ? (
        <RatingSuccessful
          navigation={navigation}
          confirmationHandler={confirmationHandler}
          displayNextHandler={displayNextHandler}
        />
      ) : (
        <View style={styles.ratingConfirmation}>
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Please Confirm Your Rating</Text>
              {/* get this from pop or smth lol */}
              <Image
                source={require("../assets/images/mary_jane.png")}
                style={{ marginVertical: 20 }}
              />
              <Text
                style={{ ...styles.header, fontSize: 20, marginBottom: 16 }}
              >
                Mary Jane
              </Text>
            </View>

            <View style={styles.ratingsContainer}>
              <Text style={styles.starText}>
                {/* get this from pop or smth lol {name}, instead of hardcoding Mary Jane */}
                You have provided the following rating to: Mary Jane
              </Text>
              <View style={styles.ratingStars}>
                {/* Pull this from props and refactor this to be a .map() or smth*/}
                <Image
                  source={require("../assets/rating_stars_bright/1star.png")}
                />
                <Image
                  source={require("../assets/rating_stars_bright/2star.png")}
                />
                <Image
                  source={require("../assets/rating_stars_bright/3star.png")}
                />
                <Image
                  source={require("../assets/rating_stars_bright/4star.png")}
                />
                <Image
                  source={require("../assets/rating_stars_bright/5star.png")}
                />
              </View>
            </View>

            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>Comments</Text>
              <Text style={styles.comments} textAlignVertical="top">
                Some dummy text shall eventually go here lol but for now it
                could be whatever
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#E16363" }}
              >
                <Text
                  style={styles.buttonText}
                  onPress={() => confirmationHandler(false)}
                >
                  No, Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#B69DFE" }}
                onPress={confirmedRatingHandler}
              >
                <Text style={styles.buttonText}>Yes, Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  ratingConfirmation: {
    backgroundColor: "#10606B",
    height: "100%",
    justifyContent: "center",
    opacity: 0.95,
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    lineHeight: 22,
    color: "white",
    fontWeight: 700,
  },
  ratingsContainer: {
    justifyContent: "space-between",
    height: 80,
    marginBottom: 26,
  },
  starText: {
    color: "white",
    textAlign: "center",
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
  },
  commentContainer: {
    marginHorizontal: 28,
    marginBottom: 45,
  },
  commentText: {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 4,
  },
  comments: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderStyle: "solid",
    padding: 12,
    color: "white",
  },
  buttonContainer: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 26,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 157,
    height: 44,
    borderRadius: 8,
    borderColor: "transparent",
  },
  buttonText: {
    color: "#F5F5F5",
    fontWeight: 700,
    fontSize: 15,
  },
});

export default RatingConfirmation;
