import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <>
      <UserProfile />
      {/* <HomePage /> */}
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
