import { StyleSheet, View, Dimensions, Text } from "react-native";
import { GOOGLE_MAPS_API_KEY } from "@env";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { useRef, useState } from "react";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.006;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  // for MuckMuster
  latitude: 43.2617,
  longitude: -79.9228,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Map = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef();

  return (
    <MapView
      ref={mapRef}
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_POSITION}
    />
  );
};

export default Map;
