/* eslint-disable class-methods-use-this */
import { convertToBase64 } from '../utils/validations.js';

export default class ServiceManager {
  setUser(user = {}) {
    if (!this.getUser(user.name)) {
      const encryptedPassword = convertToBase64(user.password);
      const userData = {
        password: encryptedPassword,
        dateSession: new Date(),
      };
      this.saveUser({ name: user.name, ...userData });
    }
  }

  getUser(user = '') {
    return JSON.parse(window.localStorage.getItem(user)) || null;
  }

  saveUser(user = {}) {
    if (user.name && user.password && user.dateSession) {
      const userData = {
        password: user.password,
        dateSession: user.dateSession,
      };
      window.localStorage.setItem(user.name, JSON.stringify(userData));
    }
  }

  updateUserLastSessionDate(user = '') {
    const userSaved = this.getUser(user);
    if (userSaved) {
      this.saveUser({ name: user, ...userSaved, dateSession: new Date() });
    }
  }

  removeUser(user = '') {
    if (this.getUser(user)) window.localStorage.removeItem(user);
  }

  checkCredentials(user) {
    const userLocalStorage = this.getUser(user.name);
    return userLocalStorage && userLocalStorage.password
      ? convertToBase64(user.password) === userLocalStorage.password
      : false;
  }
}
