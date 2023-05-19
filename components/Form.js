import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("screen");

const onPressHandler = () => {};

const Form = ({ inputFieldText, buttonHandler }) => {
  return (
    <KeyboardAwareScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
    >
      {inputFieldText.map((i, idx) => {
        return <TextInput key={idx} label={i} style={{ width: width - 100 }} />;
      })}

      <Button style={styles.button} title="Submit" onPress={onPressHandler} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 100,
    borderwidth: 3,
    borderColor: "blue",
  },
  button: {
    marginTop: 100,
    width: width - 100,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
