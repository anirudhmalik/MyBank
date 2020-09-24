import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBox2 from "../components/SearchBox2";
import Screen from "../components/Screen";
import colors from "../config/colors";
import handlerApi from "../api/handlerApi";
import Error from "../components/Error";
import SearchCard from "../components/SearchCard";
import AppBottomBar from "../components/AppBottomBar";
import AppText from "../components/AppText";

function SearchFeed({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("No Internet Connection");
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("got query " + route.params.text);
    if (route.params.text != null) {
      getResult(route.params.text);
    }
  }, []);
  const getResult = async (query) => {
    setLoading(true);
    setSearching(true);
    setData([]);
    console.log("searching ->" + query);
    const result = await handlerApi.getData(query);
    if (!result.ok) {
      console.log("Not Found " + query);
      setSearching(false);
      if (result.data == "Not Found") {
        setMessage("Bank Not Found !");
        setError(true);
      } else {
        setError(true);
      }
      return;
    }
    console.log("Found " + query);
    setError(false);
    setData(result.data);
    setSearching(false);
    setLoading(false);
  };
  return (
    <>
      <Screen style={styles.container}>
        <SearchBox2
          query={route.params.text}
          getResult={getResult}
        ></SearchBox2>
        <Error visible={error} message={message}></Error>
        {!loading ? (
          <SearchCard item={data}></SearchCard>
        ) : (
          <>
            {searching ? (
              <View style={styles.loading}>
                <AppText style={styles.text}>{"Searching.."}</AppText>
              </View>
            ) : (
              <></>
            )}
          </>
        )}
      </Screen>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.medium}
        hrt_clr={colors.medium}
        acc_clr={colors.blue}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  loading: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.medium,
  },
});

export default SearchFeed;
