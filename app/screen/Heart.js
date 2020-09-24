import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Error from "../components/Error";
import HeartList from "../components/HeartList";
import AppBottomBar from "../components/AppBottomBar";
import colors from "../config/colors";
function Heart({ navigation }) {
  return (
    <>
      <Screen>
        <HeartList></HeartList>
        <Error visible={false}></Error>
      </Screen>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.medium}
        hrt_clr={colors.danger}
        acc_clr={colors.medium}
      ></AppBottomBar>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Heart;
