import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function SearchBox2({ getResult, query }) {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={query}
        maxLength={16}
        placeholder="Bank IFSC Code"
        onChangeText={(value) => setText(value)}
        placeholderTextColor={colors.medium}
        style={styles.text}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          text != null ? getResult(text) : getResult(query);
        }}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={"search-web"}
            size={30}
            color={colors.blue}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.light,
    height: 40,
    justifyContent: "center",
    marginHorizontal: 18,
    flexDirection: "row",
    marginTop: 8,
  },
  icon: {
    marginRight: 13,
  },
  text: {
    color: colors.medium,
    fontSize: 20,
    flex: 1,
    marginLeft: 13,
  },
});

export default SearchBox2;
