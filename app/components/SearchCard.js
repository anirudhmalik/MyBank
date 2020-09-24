import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import cache from "../utility/cache";
import colors from "../config/colors";
import AppText from "../components/AppText";
function SearchCard({ item }) {
  const [clr, setClr] = useState(colors.medium);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getColor(item.IFSC);
  }, []);
  const getColor = async (value) => {
    const result = await cache.get(value);
    if (result != null) {
      setClr(colors.danger);
    }
  };
  const handleData = async () => {
    if (clr == colors.medium) {
      await cache.store(item.IFSC, item);
      console.log("Bank Saved " + item.IFSC);
    } else {
      const result = await cache.remove(item.IFSC);
      console.log("Bank Removed " + item.IFSC);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TouchableWithoutFeedback
          style={styles.textContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text numberOfLines={1} style={styles.title}>
            {item.BANK}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {item.ADDRESS}
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.rightContainer}
          onPress={() => {
            clr == colors.danger
              ? setClr(colors.medium)
              : setClr(colors.danger);
            handleData();
          }}
        >
          <MaterialCommunityIcons name={"heart"} size={25} color={clr} />
        </TouchableWithoutFeedback>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.popup}>
          <View style={styles.text}>
            <AppText style={{ color: colors.white }}>Bank Details</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"Bank : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.BANK}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"Bank Code : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.BANKCODE}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"Branch : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.BRANCH}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"City : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.CITY}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"District : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.DISTRICT}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"IFSC : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.IFSC}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"State : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.STATE}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"Contact : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.CONTACT}</AppText>
          </View>
          <View style={styles.detailContainer}>
            <AppText style={{ color: colors.medium }}>{"Address : "}</AppText>
            <AppText style={{ color: colors.medium }}>{item.ADDRESS}</AppText>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    width: "100%",
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
  },
  detailContainer: {
    flexDirection: "row",
    marginVertical: 3,
    marginLeft: 18,
    width: 300,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 18,
    borderRadius: 8,
  },
  popup: {
    marginVertical: 150,
    marginHorizontal: 8,
    paddingBottom: 18,
    backgroundColor: colors.white,
  },
  rightContainer: {
    height: "100%",
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  subTitle: {
    fontSize: 14,
    width: 200,
    color: colors.medium,
  },
  title: {
    fontSize: 16,
    width: 200,
    color: colors.dark,
  },
  textContainer: {
    marginLeft: 8,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.medium,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default SearchCard;
