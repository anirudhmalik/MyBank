import { AsyncStorage } from "react-native";
const store = async (id, value) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value));
    const keys = await AsyncStorage.getAllKeys();
    console.log("keys all:" + keys);
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const result = JSON.parse(value);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getAll = async () => {
  const data = [];
  var index = 0;
  const keys = await AsyncStorage.getAllKeys();
  const items = await AsyncStorage.multiGet(keys);
  items.map((item, index) => (data[index] = JSON.parse(item[1])));
  return data;
};
const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return null;
  } catch (error) {
    console.log(error);
  }
};
export default {
  store,
  get,
  getAll,
  remove,
};
