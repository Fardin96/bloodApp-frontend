import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CARD_WIDTH } from "../constants/constants";

const Card = (props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.mainText}>{`Donor name`}</Text>

      <View style={styles.bottomContainer}>
        {/* <WalletDetails
          walletAddress={walletAddress}
          logo={logo}
          noNetworkLogo={noNetworkLogo}
          substitueLogo={substitueLogo}
        /> */}
        {/* <RightButtons
          walletAddress={walletAddress}
          network={network}
          logo={logo}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 15,
    margin: 12,
  },
  mainText: {
    color: "red",
    // fontFamily: CustomFont.robotoBold,
    fontSize: 25,
    marginVertical: 20,
  },

  bottomContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "green",
  },
});

export default Card;
