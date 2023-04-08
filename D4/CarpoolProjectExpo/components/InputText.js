import { View, Text, TextInput, StyleSheet } from "react-native";

import { useState } from "react";

// manage using local state later lol'

const InputText = ({
  header,
  placeholder,
  value,
  updateStateHandler,
  attr,
}) => {
  const [data, setData] = useState(placeholder);

  const onChangeHandler = (e) => {
    setData(e);
    updateStateHandler(e, attr);
  };

  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <TextInput
        style={styles.placeholder}
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => onChangeHandler(e)}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    lineHeight: 22,
  },
  placeholder: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderStyle: "solid",
    padding: 12,
    color: "black",
  },
});
