import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

// import Form from "../components/Form";
import { API_URL } from "@env";
import Form from "../Form";
import Icon from "react-native-vector-icons/AntDesign";
import { SCREEN_HEIGHT } from "../../constants/constants";
// import { Toast } from "toastify-react-native";

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
      .then((response) => {
        const res = response.json();
        console.log("response finiding by email: ", res);
        return res;
      })
      .then((userData) => {
        console.log("data from finding by email: ", userData);
        // return user;
        return userData;
      })
      .catch((error) => console.log("error finding by email: ", error));
    // console.log("the user is ", findRes._id);
    const userID = findRes._id;

    const api = `${API_URL}/update/${userID}`;
    console.log("the api is :", api);
    // console.log("the api is :", typeof api);
    // console.log("what data am i updating: ", data);

    // update user info request
    const res = await fetch(
      "http://192.168.68.108:5001/donor/update/646c5f06dbf2ac6c321f6f89",
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
        // console.log("is the error from converting the response?");
        const res = await response.json();
        console.log("yep, and this is the actual response ", res);
        // console.log("response from update: ", res);
        // return response.data;
      })
      // .then((data) => {
      //   console.log("response from the update function ", data);
      //   ToastAndroid.show("User successfully updated!", ToastAndroid.LONG);
      // })
      .catch((error) => {
        console.log("error from info update: ", error);
      });
    // console.log("the complete res: ", res);
  };

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.icContainer} onPress={cancelModal}>
          <Icon name="close" size={30} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Form
          screenName={"Registration"}
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
  formStyle: {
    //! tepmorary fix
    height: SCREEN_HEIGHT + 200,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 50 : 20,
    // borderWidth: 1, borderColor: "red",
  },
  icContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20,
    // paddingBottom: 10,
    // borderWidth: 1,
    // borderColor: "green",
  },
});

export default Update;
