import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL } from "@env";

import Form from "../components/Form";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
    // {
    //   label: "name",
    //   setter: setName,
    //   value: name,
    //   keyboardType: "default",
    //   defaultValue: "newssss1",
    // },
    {
      label: "email",
      setter: setEmail,
      value: email,
      keyboardType: "default",
      defaultValue: "test@gmail.com",
    },
    {
      label: "password",
      setter: setPassword,
      value: password,
      keyboardType: "default",
      defaultValue: "test",
    },
    // {
    //   label: "blood group",
    //   setter: setBloodGroup,
    //   value: bloodGroup,
    //   keyboardType: "default",
    //   defaultValue: "O+",
    // },
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

  const [error, setError] = useState(false);
  const setErrorHandler = () => {
    setError((prev) => !prev);
  };

  const registerHandler = () => {
    navigation.navigate("registration");
  };

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };

    // const data = {
    // //   name: "newssss19",
    //   email: "nessssss19@gmail.com",
    //   password: "1111",
    // //   bloodGroup: "O+",
    // //   contact: "03234234234",
    // //   address: "badda, dhaka",
    // //   dob: "12-22-23",
    // //   recency: "12-22-23",
    // //   nid: "32423492837408327",
    // };

    console.log("form data: ", data);

    const api = `${API_URL}/auth/login/`;
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
        console.log("response from login: ", res);

        if (!res.token) {
          setErrorHandler();
        } else if (res.token) {
          await AsyncStorage.setItem("@user_token", res.token).then((saved) => {
            navigation.navigate("home");
          });
        }
      })
      .catch((error) => {
        console.log("error from login: ", error);
      });
    // console.log("the complete res: ", res);
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <Form
        screenName={"Login"}
        inputFields={inputFields}
        onSubmit={onSubmit}
      />

      <View style={styles.textContainer}>
        <Text style={styles.or}>or,</Text>

        <TouchableOpacity onPress={registerHandler}>
          <Text style={{ color: "blue" }}>Register</Text>
        </TouchableOpacity>
      </View>

      {error && (
        <Text style={styles.error}>Please check your email and password!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  scrollContainer: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  textContainer: { flexDirection: "row", paddingBottom: 15 },
  or: { color: "black", marginRight: 5 },
  error: { color: "red", marginBottom: 50 },
});

export default Login;
