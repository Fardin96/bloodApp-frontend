import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import Icon from "react-native-vector-icons/Feather";

import { API_URL } from "@env";
import { SCREEN_HEIGHT } from "../constants/constants";

const Home = ({ navigation }) => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    (async () => {
      const api = `${API_URL}/donor/`;
      console.log("the api is :", api);

      // GET REQUEST
      await fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDonors(data);
          // console.log("Donor data: ", donors);
        })
        .catch((error) => console.log("Error fetching donors: ", error));
    })();
  }, []);

  const settingsPressHandler = () => {
    navigation.navigate("settings");
  };

  // console.log("donors are: ", donors);

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.icContainer}
          onPress={settingsPressHandler}
        >
          <Icon name="settings" size={30} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {typeof donors === "undefined" || donors === [] ? (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        ) : (
          donors.map((i, idx) => {
            return <Card key={idx} donorName={i.name} />;
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 50,
    marginRight: 20,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "red",
  },
  icContainer: {
    // borderWidth: 1,
    // borderColor: "green",
  },
  loadingContainer: {
    height: SCREEN_HEIGHT - 200,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  scrollView: {
    // borderWidth: 2,
    // borderColor: "red",
  },
});

export default Home;
