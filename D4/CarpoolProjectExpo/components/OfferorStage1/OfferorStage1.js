import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";

import Banner from "./Banner";
import InputText from "../InputText";


const LoginPage = () => {
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
}

export default function OfferorStage1() {

    const [location, setLocation] = useState('');
    const [destination, setDestination] = useState('');


  return (


    <View style={styles.container}>
      <Banner pageTitle="Where to?" />

      <View style={styles.inputContainer}>
        <InputText
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Location"
        />
        <InputText
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
      height: 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
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
