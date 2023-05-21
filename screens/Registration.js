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

const onSubmit = async () => {
  // const data = {
  //   name: "new133",
  //   email: "ne123@gmail.com",
  //   password: "1111",
  //   bloodGroup: "O+",
  //   contact: "03234234234",
  //   address: "badda, dhaka",
  //   dob: "12-22-23",
  //   recency: "12-22-23",
  //   nid: "32423492837408327",
  // };

  // const response = await fetch("http://localhost:5001/donor/add/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });

  // const res = await response.json();
  // console.log("response: ", res);
  console.log("response: ");
};

const Registration = () => {
  return (
    <View>
      <Form
        screenName={"Registration"}
        inputFieldText={inputFields}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default Registration;
