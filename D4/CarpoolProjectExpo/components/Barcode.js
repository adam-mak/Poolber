import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function TaxiScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [taxiId, setTaxiId] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setTaxiId(data);
  };

  const generateRandomNumber = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return randomNum.toString();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your taxi ID: {generateRandomNumber()}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>Scan again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 24,
    margin: 20,
  },
  button: {
    backgroundColor: '#2f4f4f',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
