import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const displayPicture = {
  john_doe: require("../assets/images/john_doe.png"),
  mary_jane: require("../assets/images/mary_jane.png"),
};

const Banner = ({ pageTitle, header, name }) => (
  <>
    <View style={styles.topBanner}>
      <View style={styles.icons}>
        <Pressable>
          <Image source={require("../assets/images/return_arrow.png")} />
        </Pressable>
        <Text style={styles.editProfile}>{pageTitle}</Text>
        <Pressable>
          <Image source={require("../assets/images/share_icon.png")} />
        </Pressable>
      </View>
    </View>
    <View style={styles.profilePicture}>
      <Image source={displayPicture[name]} />
      <Pressable>
        <Text style={styles.changeProfilePicture}>{header}</Text>
      </Pressable>
    </View>
  </>
);

const styles = StyleSheet.create({
  topBanner: {
    height: 150,
    backgroundColor: "#929FCC",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editProfile: {
    color: "white",
    fontSize: 15,
  },
  profilePicture: {
    width: "100%",
    height: 124,
    position: "absolute",
    top: 90,
    flexDirection: "column",
    alignItems: "center",
  },
  changeProfilePicture: {
    paddingTop: 4,
    fontSize: 16,
  },
});

export default Banner;
