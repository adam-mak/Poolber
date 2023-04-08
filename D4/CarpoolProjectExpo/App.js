import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { FIREBASE_API_KEY } from "@env";

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Rating from "./components/Rating";

export default function App() {
  const [loaded] = useFonts({
    UberMoveMedium: require('./assets/fonts/UberMoveMedium.otf'),
    UberMoveBold: require('./assets/fonts/UberMoveBold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <HomePage />
      {/* <View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
		<StatusBar style="auto" />
		</View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
