import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const ButtonContainer = ({
  successMessage,
  successHandler,
  unsuccessfulMessage,
  unsuccessfulHandler,
  endState,
  endStateHandler,
}) => (
  <>
    <View style={styles.buttonContainer}>
      <View style={styles.successUnsuccessButtons}>
        <Pressable
          style={{ ...styles.button, backgroundColor: "#E16363" }}
          onPress={unsuccessfulHandler}
        >
          <Text style={styles.buttonText}>{unsuccessfulMessage}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={successHandler}>
          <Text style={styles.buttonText}>{successMessage}</Text>
        </Pressable>
      </View>
      <Pressable style={styles.endStateButton} onPress={endStateHandler}>
        <Text style={styles.buttonText}>{endState}</Text>
      </Pressable>
    </View>
    <Image style={styles.wave} source={require("../assets/images/wave.png")} />
  </>
);

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-between",
    height: 100,
    marginTop: 16,
    marginHorizontal: 36,
  },
  successUnsuccessButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#B69DFE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 22,
  },
  endStateButton: {
    width: 320,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    position: "relative",
    bottom: -20,
  },
});

export default ButtonContainer;
