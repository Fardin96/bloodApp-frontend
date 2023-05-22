import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("screen");
const FORM_WIDTH = width - 100;

<<<<<<< HEAD
const Form = ({ inputFieldText, screenName, onSubmit }) => {
=======
const Form = ({ inputFieldText, screenName, onSubmit, onChangeText }) => {
>>>>>>> 9842388f422a58be1e5e77a49aa0c083f715097a
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
<<<<<<< HEAD
    </KeyboardAwareScrollView>
=======
    </ScrollView>
>>>>>>> 9842388f422a58be1e5e77a49aa0c083f715097a
  );
};

const styles = StyleSheet.create({
  root: {
    width: width,
    // borderwidth: 3,
    // borderColor: "blue",
    // backgroundColor: "green",
  },
<<<<<<< HEAD
=======
  scrollContainer: {
    alignItems: "center",
  },
>>>>>>> 9842388f422a58be1e5e77a49aa0c083f715097a
  button: {
    marginVertical: 50,
    width: FORM_WIDTH,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
