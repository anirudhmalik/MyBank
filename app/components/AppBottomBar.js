import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function AppBottomBar({ navigation, hm_clr, hrt_clr, acc_clr }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
        <View style={styles.home}>
          <MaterialCommunityIcons name="home" size={30} color={hm_clr} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Heart")}>
        <View style={styles.heart}>
          <MaterialCommunityIcons name="heart" size={30} color={hrt_clr} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Search", { text: null })}
      >
        <View style={styles.account}>
          <MaterialCommunityIcons name="search-web" size={30} color={acc_clr} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 775,
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    height: "7%",
    backgroundColor: colors.green,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  heart: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  account: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBottomBar;
