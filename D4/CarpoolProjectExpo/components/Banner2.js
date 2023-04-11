import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

const Banner2 = ({ pageTitle, navigation }) => {
  const returnHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.topBanner}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={returnHandler}>
          <Image
            source={require("../assets/images/return_arrow.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.pageTitleStyle}>{pageTitle}</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/share_icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  pageTitleStyle: {
    color: "white",
    textAlign: "center",
    top: 25,
    fontSize: 35,
    width: 200,
    height: 100,
  },
  icon: {
    padding: 10,
    borderRadius: 10,
    width: 44,
  },
});

export default Banner2;
