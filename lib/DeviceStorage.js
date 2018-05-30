import { AsyncStorage } from 'react-native';

class DeviceStorage {

  static async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

  static async getItem(key) {
    try {
      const token = await AsyncStorage.getItem(key);
      return token;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

  static async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

}

export default DeviceStorage;
