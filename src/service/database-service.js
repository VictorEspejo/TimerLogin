import { convertToBase64 } from "../utils/validations";

export const saveUserInLocalStorage = (
  user,
  password,
  dateSession = new Date()
) => {
  if (!getUserFromLocalStorage(user)) {
    const encryptedPassword = convertToBase64(password);
    const userData = {
      password: encryptedPassword,
      dateSession,
    };
    saveInLocalStorage(user, userData);
  }
};

export const validateUserPassword = (user, password) => {
  const userLocalStorage = getUserFromLocalStorage(user);
  return userLocalStorage && userLocalStorage.password
    ? convertToBase64(password) === userLocalStorage.password
    : false;
};

export const saveDateLocalStorage = (user) => {
  const userSaved = getUserFromLocalStorage(user);
  if (userSaved && !!userSaved.password && !!userSaved.dateSession) {
    saveInLocalStorage(user, { ...userSaved, dateSession: new Date() });
  }
};

const saveInLocalStorage = (user, data) => {
  window.localStorage.setItem(user, JSON.stringify(data));
};

export const getUserFromLocalStorage = (user) =>
  JSON.parse(window.localStorage.getItem(user)) || false;
