import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { SCREEN_HEIGHT } from "../../constants/constants";
import { API_URL } from "@env";

import Form from "../Form";

const Update = ({ navigation, cancelModal }) => {
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
    {
      label: "contact",
      setter: setContact,
      value: contact,
      keyboardType: "numeric",
      defaultValue: "03234234234",
    },
    {
      label: "address",
      setter: setAddress,
      value: address,
      keyboardType: "default",
      defaultValue: "badda, dhaka",
    },

    {
      label: "dob",
      setter: setDob,
      value: dob,
      keyboardType: "default",
      defaultValue: "12-22-23",
    },
    {
      label: "recency",
      setter: setRecency,
      value: recency,
      keyboardType: "default",
      defaultValue: "12-22-23",
    },
    {
      label: "nid",
      setter: setNid,
      value: nid,
      keyboardType: "numeric",
      defaultValue: "32423492837408327",
    },
  ];

  const loginHandler = () => {
    navigation.navigate("login");
  };

  const onSubmit = async () => {
    const data = {
      name: name === "" ? "updatedName" : name,
      email: email === "" ? "updatedemail@gmail.com" : email,
      password: password === "" ? "1111" : password,
      bloodGroup: bloodGroup === "" ? "0+" : bloodGroup,
      contact: contact === "" ? "0" : contact,
      address: address === "" ? "address" : address,
      dob: dob === "" ? "12-12-2023" : dob,
      recency: recency === "" ? "12-12-2023" : recency,
      nid: nid === "" ? "0123456789" : nid,
    };

    // find user _id
    const findRes = await fetch(`${API_URL}/donor/find/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    })
      .then(async (response) => {
        const res = await response
          .json()
          .then(async (res) => {
            const userID = res._id;
            const api = `${API_URL}/donor/update/${userID}`;
            // console.log('the api is :', api);

            // update user info request
            const updateRes = await fetch(
              // 'http://192.168.0.195:5001/donor/update/6460c616b041a39b2280cbe3',
              api,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json",
                },
                body: JSON.stringify(data),
              }
            )
              .then(async (response) => {
                if (!response.ok) {
                  console.log("Could not update user from front end!");
                } else {
                  console.log("User info updated!");
                }
              })
              .catch((error) => {
                console.log("error from info update: ", error);
              });
          })
          .catch((err) => console.log("error:"));
      })
      .catch((error) => console.log("error finding by email: ", error));
  };

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={cancelModal}>
          <Icon name="close" size={30} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Form
          screenName={"Update Info"}
          inputFields={inputFields}
          onSubmit={onSubmit}
          rootStyle={styles.formStyle}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 50 : 20,
    marginRight: 20,
    // borderWidth: 1,
    // borderColor: "red",
  },
  formStyle: {
    //! tepmorary fix
    height: SCREEN_HEIGHT + 200,
  },
});

export default Update;
