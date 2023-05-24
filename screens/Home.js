import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";

import { API_URL } from "@env";

const Home = () => {
  useEffect(() => {
    (async () => {
      const api = `${API_URL}/donor/`;
      console.log("the api is :", api);

      // GET REQUEST
      await fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => console.log("Donor data: ", data))
        .catch((error) => console.log("Error fetching donors: ", error));
    })();
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
