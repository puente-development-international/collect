import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (value, storageName) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageName, jsonValue);
  } catch (e) {
    // saving error
    console.log(e); //eslint-disable-line
  }
};

const getData = async (storageName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e); //eslint-disable-line
  }

};

const deleteData = async (storageName) => {
  await AsyncStorage.removeItem(storageName);
};

const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    return result;
  } catch (e) {
    console.log(e); //eslint-disable-line
  }
};

export {
  storeData, getData, deleteData, getAllData
};
