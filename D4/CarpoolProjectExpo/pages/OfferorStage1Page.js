import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";

import Banner2 from "../components/Banner2";


export default function OfferorStage1Page() {

    const [location, setLocation] = useState('');
    const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      <Banner2 pageTitle="Where to?" />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Location"
        />
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholder="Destination"
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("Carpool button pressed")}>
        <Text style={styles.buttonText}>Setup Carpool Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainer: {
      marginTop: 20,
      marginHorizontal: 40,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "#A9A9A9",
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      backgroundColor: 'black',
      width: '90%',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
