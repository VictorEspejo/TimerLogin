import { convertToBase64 } from '../utils/validations.js';

export class ServiceManager {
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

  static getUser(user = '') {
    return JSON.parse(window.localStorage.getItem(user)) || null;
  }

  static saveUser(user = {}) {
    const userData = { password: user.password, dateSession: user.dateSession };
    window.localStorage.setItem(user.name, JSON.stringify(userData));
  }

  updateUserLastSessionDate(user = '') {
    const userSaved = this.getUser(user);
    if (userSaved && !!userSaved.dateSession) {
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
