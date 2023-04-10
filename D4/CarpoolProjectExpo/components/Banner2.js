import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const Banner2 = ({ pageTitle }) => (
  <>
    <View style={styles.topBanner}>
      <View style={styles.icons}>
        <Pressable>
          <Image source={require("../assets/images/return_arrow.png")} />
        </Pressable>
        <Text style={styles.pageTitleStyle}>{pageTitle}</Text>
        <Pressable>
          <Image source={require("../assets/images/share_icon.png")} />
        </Pressable>
      </View>
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
  pageTitleStyle: {
    color: "white",
    textAlign: "center",
    top: 25,
    fontSize: 35,
    width: 200,
    height: 100,
  },
});

export default Banner2;
