import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

const displayPicture = {
  john_doe: require("../assets/images/john_doe.png"),
  mary_jane: require("../assets/images/mary_jane.png"),
};

const Banner = ({ navigation, pageTitle, header, name }) => {
  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.topBanner}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={returnHandler}>
            <Image
              source={require("../assets/images/return_arrow.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.editProfile}>{pageTitle}</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/share_icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profilePicture}>
        <Image source={displayPicture[name]} />
        <TouchableOpacity>
          <Text style={styles.changeProfilePicture}>{header}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBanner: {
    height: 150,
    backgroundColor: "#929FCC",
    paddingHorizontal: 24,
    paddingVertical: 45,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    padding: 10,
    borderRadius: 10,
    width: 44,
  },
  pageTitleStyle: {
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
