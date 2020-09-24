import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchCard from "./SearchCard";
import AppText from "./AppText";
import colors from "../config/colors";
import cache from "../utility/cache";

function HeartList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await cache.getAll();
    if (result.length > 0) {
      setData(result);
    }
    console.log(result);
  };
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.text}>{"Saved Banks"}</AppText>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.length > 0 ? (
          data.map((item) => (
            <SearchCard key={item.IFSC} item={item}></SearchCard>
          ))
        ) : (
          <AppText style={styles.text2}>{"Sorry, Nothing Saved"}</AppText>
        )}
        <View style={styles.bottom}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 250,
    alignItems: "center",
  },
  container: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "600",
  },
  text2: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 300,
    alignSelf: "center",
  },
});

export default HeartList;
