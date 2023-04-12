import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const AutoComplete = ({
  placeholder,
  updateLocation,
  updateLocationName,
  moveCamera,
}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      fetchDetails
      onPress={(data, details) => {
        const position = {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        };
        updateLocation(position);
        updateLocationName(data.description);
        moveCamera(position);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      styles={{
        textInput: {
          backgroundColor: "#FFFFFF",
          height: 40,
          borderRadius: 12,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          fontSize: 15,
          flex: 1,
        },
      }}
    />
  );
};

export default AutoComplete;
