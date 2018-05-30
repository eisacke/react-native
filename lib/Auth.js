import DeviceStorage from './DeviceStorage';

class Auth {
  static async isAuthenticated() {
    try {
      const token = await DeviceStorage.getItem('token');
      return !!token;
    } catch (error) {
      console.log('Auth Error: ' + error);
    }
  }

  static async getPayload() {
    try {
      const token = await DeviceStorage.getItem('token');
      if(!token) return null;
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.log('Auth Error: ' + error);
    }
  }
}

export default Auth;
