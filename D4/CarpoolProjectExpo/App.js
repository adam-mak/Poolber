import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import Navigator from "./routes/stack";
import LegalTermsPage from "./pages/LegalTermsPage";
import TaxiScanner from "./components/Barcode";
import OfferorStage1Page from "./pages/OfferorStage1Page";
import RequestRide from "./pages/RequestRide";
import OfferRide from "./pages/OfferRide";
import RequestRideConf from "./pages/RequestRideConf";
import OfferRideConf from "./pages/OfferRide";

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
  
  return <RequestRideConf />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
