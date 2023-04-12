import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { FIREBASE_API_KEY } from "@env";
import ArriveAtDestinationPage from "./pages/ArriveAtDestinationPage";

import Navigator from "./routes/stack";

import TaxiScanner from "./components/Barcode";

import ThanksForRidingPage from "./pages/ThanksForRidingPage";
import OfferorStage1Page from "./pages/OfferorStage1Page";
import RequestRide from "./pages/RequestRide";
import OfferRide from "./pages/OfferRide";
import RequestRideConf from "./pages/RequestRideConf";
import OfferRideConf from "./pages/OfferRide";
import OnRoutePage from "./pages/OnRoutePage";
import Loading from "./pages/Loading";

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

  return <Navigator />;
  return <OnRoutePage />;
  return <Loading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
