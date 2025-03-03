import AsyncStorage from "@react-native-async-storage/async-storage";

export type StorageKeys = "LoginInfo" | "OnboardingStatus"

export const saveToAsync = (key: StorageKeys, value: any) => {
    let data = JSON.stringify(value);
    AsyncStorage.setItem(key, data);
};

export const getFromAsync = async (key: StorageKeys) => {
    let data = await AsyncStorage.getItem(key);
    if (data) { data = JSON.parse(data); }
    return data;
};