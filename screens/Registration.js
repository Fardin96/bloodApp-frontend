import React, { useState } from "react";
import { Text, View } from "react-native";

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

  const [duplicate, setDuplicate] = useState(false);
  const setDuplicateHandler = () => {
    setDuplicate((prev) => !prev);
  };

  const inputFields = [
    {
      label: "name",
      setter: setName,
      value: name,
      keyboardType: "default",
      defaultValue: "newssss1",
    },
    {
      label: "email",
      setter: setEmail,
      value: email,
      keyboardType: "default",
      defaultValue: "nessssss1@gmail.com",
    },
    {
      label: "password",
      setter: setPassword,
      value: password,
      keyboardType: "default",
      defaultValue: "1111",
    },
    {
      label: "blood group",
      setter: setBloodGroup,
      value: bloodGroup,
      keyboardType: "default",
      defaultValue: "O+",
    },
    // {
    //   label: "contact",
    //   setter: setContact,
    //   value: contact,
    //   keyboardType: "numeric",
    //   defaultValue: "03234234234",
    // },
    // {
    //   label: "address",
    //   setter: setAddress,
    //   value: address,
    //   keyboardType: "default",
    //   defaultValue: "badda, dhaka",
    // },

    // {
    //   label: "dob",
    //   setter: setDob,
    //   value: dob,
    //   keyboardType: "default",
    //   defaultValue: "12-22-23",
    // },
    // {
    //   label: "recency",
    //   setter: setRecency,
    //   value: recency,
    //   keyboardType: "default",
    //   defaultValue: "12-22-23",
    // },
    // {
    //   label: "nid",
    //   setter: setNid,
    //   value: nid,
    //   keyboardType: "numeric",
    //   defaultValue: "32423492837408327",
    // },
  ];

  const onSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      bloodGroup: bloodGroup,
      contact: contact === "" ? "0" : contact,
      address: address === "" ? "address" : address,
      dob: dob === "" ? "12-12-2023" : dob,
      recency: recency === "" ? "12-12-2023" : recency,
      nid: nid === "" ? "0123456789" : nid,
    };

    // const data = {
    //   name: "newssss19",
    //   email: "nessssss19@gmail.com",
    //   password: "1111",
    //   bloodGroup: "O+",
    //   contact: "03234234234",
    //   address: "badda, dhaka",
    //   dob: "12-22-23",
    //   recency: "12-22-23",
    //   nid: "32423492837408327",
    // };

    console.log("form data: ", data);

    const api = `${API_URL}/donor/add/`;
    console.log("the api is :", api);

    const res = await fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const res = await response.json();
        console.log("response from registration: ", res);

        if (res === "User already exists!") {
          setDuplicateHandler();
        } else {
          navigation.navigate("login");
        }
      })
      .catch((error) => {
        console.log("error from registration: ", error);
      });
    // console.log("the complete res: ", res);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Form
        screenName={"Registration"}
        inputFields={inputFields}
        onSubmit={onSubmit}
      />
      {duplicate && (
        <Text style={{ color: "red", marginBottom: 150 }}>
          User already exists!
        </Text>
      )}
    </View>
  );
};

export default Registration;
