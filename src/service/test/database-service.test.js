import { expect } from '@esm-bundle/chai';
import { convertToBase64 } from '../../utils/validations';
import ServiceManager from '../database-service';

describe('ServiceManager', () => {
  let serviceManager = new ServiceManager();

  const userData = {
    password: convertToBase64('password'),
    dateSession: new Date('12/12/2012'),
  };
  const userLocalStorage = {
    name: 'userExample',
    value: JSON.stringify(userData),
  };

  beforeEach(() => {
    localStorage.setItem(userLocalStorage.name, userLocalStorage.value);
  });

  describe('GetUser', () => {
    it('Should get user from localStorage', () => {
      const result = serviceManager.getUser('userExample');
      expect(result).to.deep.equal(JSON.parse(userLocalStorage.value));
    });

    it('Should get null if not found the user in localStorage', () => {
      const result = serviceManager.getUser('notFound');
      expect(result).to.be.null;
    });
  });

  describe('SaveUser', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('Should save the user if it not created', () => {
      serviceManager.saveUser({ ...userData, name: userLocalStorage.name });
      const result = localStorage.getItem(userLocalStorage.name);
      expect(result).to.deep.equal(userLocalStorage.value);
    });

    it('Should not save the user if has not name & password & date', () => {
      serviceManager.saveUser({
        password: userData.password,
        name: userLocalStorage.name,
      });
      const result = localStorage.getItem(userLocalStorage.name);
      expect(result).to.not.be.equal(userLocalStorage.value);
    });
  });

  describe('UpdateUSerLastSessionDate', () => {
    it('Should update the user with a new date', () => {
      serviceManager.updateUserLastSessionDate(userLocalStorage.name);
      const result = localStorage.getItem(userLocalStorage.name);
      expect(JSON.parse(result).dateSession).to.not.equal(userData.dateSession);
    });

    it('Should not update the user if it not exists', () => {
      const fakeUserName = 'fakeUserName';
      serviceManager.updateUserLastSessionDate(fakeUserName);
      const result = localStorage.getItem(fakeUserName);
      expect(result).to.be.null;
    });
  });

  describe('setUser', () => {
    it('Should save the user with convert password and actual date', () => {
      serviceManager.setUser({
        name: userLocalStorage.name,
        password: 'password',
      });
      const result = localStorage.getItem(userLocalStorage.name);
      expect(JSON.parse(result).password).to.deep.equal(userData.password);
      expect(JSON.parse(result).dateSession).to.exist;
    });

    it('Should not save the user if it not exists', () => {
      serviceManager.setUser('fakeUser', userLocalStorage.value);
      const result = localStorage.getItem('fakeUser');
      expect(result).to.be.null;
    });
  });
});
