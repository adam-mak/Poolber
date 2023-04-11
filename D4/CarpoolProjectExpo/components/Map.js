import { StyleSheet, View, Dimensions, Text } from "react-native";
import { GOOGLE_MAPS_API_KEY } from "@env";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import AutoComplete from "./AutoComplete";

import { useRef, useState } from "react";
import { Pressable } from "react-native";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.006;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  // for MuckMuster University
  latitude: 43.2617,
  longitude: -79.9228,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Map = () => {
  const [origin, setOrigin] = useState({
    latitude: 43.2617,
    longitude: -79.9228,
  });

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef();

  const moveCameraHandler = async (position) => {
    const camera = await mapRef.current.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current.animateCamera(camera, { duration: 1000 });
    }
  };

  const displayRoute = () => {
    if (start && end) {
      setShowDirections(true);
      mapRef.current.fitToCoordinates([start, end], {
        padding: 70,
      });
    }
  };

  const displayRouteOnReady = (args) => {
    setDistance(args.distance);
    setDuration(args.duration);
  };

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.autoCompleteViewBox}>
          <AutoComplete
            placeholder="Pickup Location"
            updateLocation={setStart}
            moveCamera={moveCameraHandler}
          />
        </View>
        <View style={styles.autoCompleteViewBox}>
          <AutoComplete
            placeholder="Destination"
            updateLocation={setEnd}
            moveCamera={moveCameraHandler}
          />
        </View>
      </View>

      <View style={styles.map}>
        <MapView
          ref={mapRef}
          style={{ width: "100%", height: "100%" }}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          zoomEnabled={true}
        >
          {start != null && <Marker coordinate={start} />}
          {end != null && <Marker coordinate={end} />}
          {showDirections && start && end && (
            <MapViewDirections
              origin={start}
              destination={end}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={displayRouteOnReady}
            />
          )}
        </MapView>
      </View>

      <Pressable onPress={displayRoute}>
        <Text>Ready</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  autoCompleteViewBox: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  map: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    height: "55%",
    marginTop: 10,
    borderRadius: 6,
  },
});

export default Map;
