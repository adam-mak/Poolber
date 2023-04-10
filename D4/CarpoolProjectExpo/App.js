import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import Navigator from "./routes/stack";

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
