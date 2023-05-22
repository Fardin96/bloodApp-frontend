import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("screen");
const FORM_WIDTH = width - 100;

const Form = ({ inputFieldText, screenName, onSubmit, onChangeText }) => {
  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <Text style={{ fontSize: 30, marginBottom: 25, paddingTop: 50 }}>
        {screenName}
      </Text>

      {inputFieldText.map((i, idx) => {
        return (
          <TextInput
            key={idx}
            label={i}
            style={{ width: FORM_WIDTH }}
            onChangeText={onChangeText}
          />
        );
      })}

      <Button style={styles.button} title="Submit" onPress={onSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: width,
    // borderwidth: 3,
    // borderColor: "blue",
    // backgroundColor: "green",
  },
  scrollContainer: {
    alignItems: "center",
  },
  button: {
    marginVertical: 50,
    width: FORM_WIDTH,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
