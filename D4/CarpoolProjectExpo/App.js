import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Rating from "./components/Rating";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import MakeAccount from "./components/MakeAccount";
import LegalTerms from "./components/legalTerms/legalTerms";
import OfferorStage1 from "./components/OfferorStage1/OfferorStage1";

export default function App() {
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    UberMoveMedium: require("./assets/fonts/UberMoveMedium.otf"),
    UberMoveBold: require("./assets/fonts/UberMoveBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <OfferorStage1 />
      {/* <RegisterPage />
      <LoginPage /> */}
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
