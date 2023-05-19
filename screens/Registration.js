import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Form from "../components/Form";

const inputFields = [
  "name",
  "email",
  "password",
  "blood group",
  "contact",
  "address",
  "dob",
  "recency",
];

const Registration = () => {
  return (
    <View>
      <Form inputFieldText={inputFields} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({});
