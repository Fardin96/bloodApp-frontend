import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";

const { width } = Dimensions.get("screen");
const FORM_WIDTH = width - 100;

const Form = ({ inputFields, screenName, onSubmit }) => {
  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <Text style={{ fontSize: 30, marginBottom: 25, paddingTop: 50 }}>
        {screenName}
      </Text>

      {inputFields.map((i, idx) => {
        return (
          <TextInput
            key={idx}
            label={i.label}
            autoCapitalize="none"
            defaultValue={i.defaultValue}
            // ? remove default value from value field
            value={i.value === "" ? i.defaultValue : i.value}
            keyboardType={i.keyboardType}
            onChangeText={i.setter}
            variant="outlined"
            style={styles.textInput}
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
  textInput: { width: FORM_WIDTH, marginVertical: 5 },
  button: {
    marginVertical: 50,
    width: FORM_WIDTH,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
