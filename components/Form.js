import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";

const { width } = Dimensions.get("screen");
const FORM_WIDTH = width - 100;

const Form = ({ inputFields, value, screenName, onSubmit, onChangeText }) => {
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
            // autoComplete={false}
            // autoCapitalize="false"
            // clearButtonMode="unless-editing"

            value={i.value}
            style={{ width: FORM_WIDTH }}
            onChangeText={i.setter}
            // onSubmitEditing={onChangeText}
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
