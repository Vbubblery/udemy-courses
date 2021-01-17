import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props: any) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
  },
});

export default Input;
