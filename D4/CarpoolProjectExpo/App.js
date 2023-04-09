import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { FIREBASE_API_KEY } from "@env";

<<<<<<< HEAD
import Navigator from "./routes/stack";

export default function App() {
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    UberMoveMedium: require("./assets/fonts/UberMoveMedium.otf"),
    UberMoveBold: require("./assets/fonts/UberMoveBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigator />;
=======
import HomePage from "./components/HomePage";
import OfferRide from "./components/HomePage";

export default function App() {
  return (
    <>
      <OfferRide/>
      {/* <View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
		<StatusBar style="auto" />
		</View> */}
    </>
  );
>>>>>>> 7de10fe (finished offer ride ui page/ needs navigation/ routing)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
