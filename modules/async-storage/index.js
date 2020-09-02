import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (value, storageName) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(storageName, jsonValue);
};

const getData = async (storageName) => {
  const jsonValue = await AsyncStorage.getItem(storageName);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

const deleteData = async (storageName) => {
  await AsyncStorage.removeItem(storageName);
};

const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    return result;
  } catch (error) {
    console.log("Error loading all keys in ASync", error);
  }
}

export {
  storeData, getData, deleteData, getAllData
};
