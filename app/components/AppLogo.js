import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function AppLogo(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.tagline}>Search Bank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 10,
  },
});

export default AppLogo;
