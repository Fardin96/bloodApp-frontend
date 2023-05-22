import React from "react";
import { View } from "react-native";

import Form from "../components/Form";

import { API_URL } from "@env";

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

const Registration = ({ navigation }) => {
  const onSubmit = async () => {
    const data = {
      name: "user3",
      email: "user3@gmail.com",
      password: "1111",
      bloodGroup: "O+",
      contact: "03234234234",
      address: "badda, dhaka",
      dob: "12-22-23",
      recency: "12-22-23",
      nid: "32423492837408327",
    };
    console.log("form data: ", data);

    // const api = `${API_URL}/donor/add/`;

    // console.log("the api is :", api);

    // await fetch(api, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(async (response) => {
    //     const res = await response.json();
    //     console.log("response from registration: ", res);
    //     navigation.navigate("login");
    //   })
    //   .catch(async (error) => {
    //     // const err = await error.json();
    //     console.log("error from registration: ", error);
    //   });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Form
        screenName={"Registration"}
        inputFieldText={inputFields}
        onSubmit={onSubmit}
        // onChangeText={}
      />
    </View>
  );
};

export default Registration;
