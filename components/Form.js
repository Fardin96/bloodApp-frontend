import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import {
  FORM_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WEIDTH,
} from "../constants/constants";

const Form = ({ inputFields, screenName, onSubmit }) => {
  return (
    <View style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.secondary}>
        <Text style={styles.screenLabel}>{screenName}</Text>
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
      </View>

      <Button style={styles.button} title="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WEIDTH,
    alignItems: "center",
    justifyContent: "space-around",
    // flex: 1,
    // borderwidth: 3,
    // borderColor: "blue",
    // backgroundColor: "green",
  },
  secondary: {
    alignItems: "center",
  },
  screenLabel: {
    fontSize: 30,
    paddingBottom: 50,
    paddingTop: 50,
  },
  textInput: {
    width: FORM_WIDTH,
    marginVertical: 5,
  },
  button: {
    // alignSelf: "center",
    // marginVertical: 50,
    width: FORM_WIDTH,
    height: 50,
    justifyContent: "center",
  },
});

export default Form;
