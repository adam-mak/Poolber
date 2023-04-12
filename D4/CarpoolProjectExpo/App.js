import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { FIREBASE_API_KEY } from "@env";
import ArriveAtDestinationPage from "./pages/ArriveDestinationPage";

import Navigator from "./routes/stack";

import TaxiScanner from "./components/Barcode";

export default function App() {
  /* Load Fonts */
  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    UberMoveMedium: require("./assets/fonts/UberMoveMedium.otf"),
    UberMoveBold: require("./assets/fonts/UberMoveBold.otf"),
  });
  if (!loaded) {
    return null;
  }

  return <ArriveAtDestinationPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
