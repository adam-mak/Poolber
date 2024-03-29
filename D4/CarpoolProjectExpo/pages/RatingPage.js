import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import Banner from "../components/Banner";
import ButtonContainer from "../components/ButtonContainer";
import RatingConfirmation from "../components/RatingConfirmation";

import { useState } from "react";

const stars = {
  bright: {
    1: require("../assets/rating_stars_bright/1star.png"),
    2: require("../assets/rating_stars_bright/2star.png"),
    3: require("../assets/rating_stars_bright/3star.png"),
    4: require("../assets/rating_stars_bright/4star.png"),
    5: require("../assets/rating_stars_bright/5star.png"),
  },
  dull: {
    1: require("../assets/rating_stars_dull/1star.png"),
    2: require("../assets/rating_stars_dull/2star.png"),
    3: require("../assets/rating_stars_dull/3star.png"),
    4: require("../assets/rating_stars_dull/4star.png"),
    5: require("../assets/rating_stars_dull/5star.png"),
  },
};

const Rating = ({ navigation }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);

  const handleStarPress = (num) => setSelectedRating(num);

  const chooseStarSource = (num) =>
    selectedRating >= num ? stars.bright[num] : stars.dull[num];

  return (
    <ScrollView>
      <RatingConfirmation
        confirmation={displayConfirmation}
        confirmationHandler={setDisplayConfirmation}
        displayNext={displayNext}
        displayNextHandler={setDisplayNext}
        navigation={navigation}
      />

      <Banner
        pageTitle="Leave a Rating"
        header="Mary Jane"
        name="mary_jane"
        navigation={navigation}
      />

      <View style={styles.form}>
        <View>
          <Text style={styles.header}>Comments</Text>
          <TextInput
            style={styles.comments}
            value={comment}
            onChangeText={(e) => setComment(e)}
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.ratingsContainer}>
          <Text style={styles.header}>Rating</Text>
          <View style={styles.ratingStars}>
            {/* Could probably be replaced and refactored using a <FlatList /> */}
            <TouchableOpacity onPress={() => handleStarPress(1)}>
              <Image source={chooseStarSource(1)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarPress(2)}>
              <Image source={chooseStarSource(2)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarPress(3)}>
              <Image source={chooseStarSource(3)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarPress(4)}>
              <Image source={chooseStarSource(4)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleStarPress(5)}>
              <Image source={chooseStarSource(5)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ButtonContainer
        successMessage="Submit Rating"
        successHandler={() => setDisplayConfirmation(true)}
        unsuccessfulMessage="Skip Rating"
        unsuccessfulHandler={() => setDisplayNext(true)}
        endState="Skip All Ratings"
        endStateHandler={() => navigation.navigate("HomePage")}
      />
    </ScrollView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  form: {
    marginTop: 94,
    paddingHorizontal: 36,
    justifyContent: "space-evenly",
    height: 350,
  },
  header: {
    fontSize: 14,
    lineHeight: 22,
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
    color: "black",
  },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ratingsContainer: {
    justifyContent: "space-between",
    height: 80,
  },
});
