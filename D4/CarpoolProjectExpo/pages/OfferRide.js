import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Banner2 from "../components/Banner2";
import Map from "../components/Map";

export default function OfferorStage1Page({ navigation }) {
  return (
    <View style={styles.container}>
      <Banner2 pageTitle="Where to?" navigation={navigation} />

      <Map navigation={navigation} />
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
});
