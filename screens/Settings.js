import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  FORM_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WEIDTH,
} from "../constants/constants";

import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "@react-native-material/core";
import Update from "../components/modal/Update";
import Remove from "../components/modal/Remove";

const Settings = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [delVisible, setDelVisible] = useState(false);
  const updateModalHandler = () => {
    setVisible((prev) => !prev);
  };
  const deleteModalHandler = () => {
    setDelVisible((prev) => !prev);
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  const logoutHandler = () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.icContainer} onPress={goBackHandler}>
          <Icon name="arrowleft" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainConatiner}>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={updateModalHandler}>
            <Text>Update Info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={deleteModalHandler}>
            <Text>Remove Account</Text>
          </TouchableOpacity>
        </View>

        <Button
          variant="text"
          style={styles.button}
          title="Logout"
          onPress={logoutHandler}
        />
      </View>

      <Modal animationType="slide" visible={visible}>
        <Update cancelModal={updateModalHandler} />
      </Modal>

      <Modal animationType="slide" visible={delVisible} transparent>
        <Remove cancelModal={deleteModalHandler} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  topContainer: { flexDirection: "row", alignItems: "center", marginTop: 50 },
  icContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: 10,
    // borderWidth: 1,
    // borderColor: "green",
  },
  mainConatiner: {
    height: SCREEN_HEIGHT - 100,
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  option: {
    padding: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
  },
  optionContainer: {
    width: SCREEN_WEIDTH,
    // borderWidth: 1,
    // borderColor: "red",
  },
  button: {
    // alignSelf: "center",
    marginVertical: 50,
    width: FORM_WIDTH,
    height: 50,
    justifyContent: "center",
  },
});

export default Settings;
