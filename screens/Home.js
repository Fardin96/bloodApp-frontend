import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";

import { API_URL } from "@env";

const Home = () => {
  useEffect(async () => {
    const api = `${API_URL}/donor/`;
    console.log("the api is :", api);

    const res = await fetch(api, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((response) => {
        const res = response.json();
        console.log("response fetching donors: ", response.data);
      })
      .catch((error) => console.log("Error fetching donors: ", error));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Card />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
