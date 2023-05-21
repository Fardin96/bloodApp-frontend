import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("screen");

const Form = ({ inputFieldText, screenName, onSubmit }) => {
  return (
    <KeyboardAwareScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 30, marginBottom: 25 }}>{screenName}</Text>

      {inputFieldText.map((i, idx) => {
        return <TextInput key={idx} label={i} style={{ width: width - 100 }} />;
      })}

      <Button style={styles.button} title="Submit" onPress={onSubmit} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 50,
    borderwidth: 3,
    borderColor: "blue",
  },
  button: {
    marginTop: 50,
    width: width - 100,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
