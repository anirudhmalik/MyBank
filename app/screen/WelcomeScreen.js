import React from "react";
import { StyleSheet } from "react-native";
import SearchBox from "../components/SearchBox";
import Screen from "../components/Screen";
import AppLogo from "../components/AppLogo";
import AppBottomBar from "../components/AppBottomBar";
import colors from "../config/colors";
function WelcomeScreen({ navigation }) {
  return (
    <>
      <Screen style={styles.container}>
        <AppLogo></AppLogo>
        <SearchBox navigation={navigation}></SearchBox>
      </Screen>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.blue}
        hrt_clr={colors.medium}
        acc_clr={colors.medium}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
