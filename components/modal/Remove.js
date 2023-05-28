import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "@react-native-material/core";
import Icon from "react-native-vector-icons/AntDesign";

import { SCREEN_HEIGHT, SCREEN_WEIDTH } from "../../constants/constants";

const HEIGHT = SCREEN_HEIGHT - 600;
const WIDTH = SCREEN_WEIDTH - 100;

const Remove = ({ cancelModal }) => {
  return (
    <TouchableOpacity onPress={cancelModal} style={styles.root}>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={1}
        style={styles.secondary}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={cancelModal}>
            <Icon name="close" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <Text> Are you sure you want {"\n"}to remove this account?</Text>

          <View style={styles.btnContainer}>
            <Button variant="outlined" style={styles.button} title="Delete" />
            <Button
              style={styles.button}
              title="Cancel"
              onPress={cancelModal}
            />
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(156,156,156,0.75)",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  secondary: {
    // flex: 1,
    height: HEIGHT,
    width: WIDTH,
    alignItems: "center",
    borderRadius: HEIGHT * 0.02,
    backgroundColor: "white",
    // borderWidth: 1,
    // borderColor: "red",
  },
  topContainer: {
    width: WIDTH - 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "red",
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "red",
  },
  btnContainer: {
    width: WIDTH - 80,
    marginTop: 30,
    //   borderWidth: 2,
    //   borderColor: "blue",
  },
  button: {
    margin: 5,
  },
});

export default Remove;
