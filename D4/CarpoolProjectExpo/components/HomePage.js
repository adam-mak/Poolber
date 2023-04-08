import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Poolber</Text>
      </View>

      <View style={styles.requestRideContainer}>
        {/* <Button /> component does not allow for custom styles (unless we wrap it in a <View/> component and apply the styles there).
	      For custom styles, use a <Pressable /> component */}
        <Pressable>
          <Image
            source={require("../assets/images/request_ride_button.png")}
          />
        </Pressable>
      </View>

      <View style={styles.offerRideContainer}>
        <Pressable>
          <Image
            source={require("../assets/images/offer_ride_button.png")}
          />
        </Pressable>
      </View>

      <View style={styles.logoutContainer}>
        <Pressable>
          <Text> Logout </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 45,
  },
  headerContainer: {
    flex: 1,
  },
  requestRideContainer: {
    flex: 2,
    alignItems: "center",
  },
  offerRideContainer: {
    flex: 3,
    alignItems: "center",
  },
  logoutContainer: {
    flex: 4,
  },
  header: {
    fontFamily: "UberMoveMedium",
    fontSize: 50,
    textAlign: "right",
  }

});

export default HomePage;
