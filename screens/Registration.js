import React, { useState } from "react";
import { View } from "react-native";

import Form from "../components/Form";

import { API_URL } from "@env";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [recency, setRecency] = useState("");
  const [nid, setNid] = useState("");

  const inputFields = [
    { label: "name", setter: setName, value: name },
    { label: "email", setter: setEmail, value: email },
    { label: "password", setter: setPassword, value: password },
    { label: "blood group", setter: setBloodGroup, value: bloodGroup },
    { label: "contact", setter: setContact, value: contact },
    { label: "address", setter: setAddress, value: address },
    { label: "dob", setter: setDob, value: dob },
    { label: "recency", setter: setRecency, value: recency },
    { label: "nid", setter: setNid, value: nid },
  ];

  const onSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      bloodGroup: bloodGroup,
      contact: bloodGroup,
      address: address,
      dob: dob,
      recency: recency,
      nid: nid,
    };
    console.log("form data: ", data);

    const api = `${API_URL}/donor/add/`;

    console.log("the api is :", api);

    await fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log("fetched data");
        const res = await response.json();
        console.log("response from registration: ", res);
        navigation.navigate("login");
      })
      .catch(async (error) => {
        // const err = await error.json();
        console.log("error from registration: ", error);
      });

    console.log("end of the function");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Form
        screenName={"Registration"}
        inputFields={inputFields}
        onSubmit={onSubmit}
        onChangeText={() => console.log("first")}
      />
    </View>
  );
};

export default Registration;
