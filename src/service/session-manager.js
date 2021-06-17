export default class SessionManager {
  constructor(name) {
    this.name = name;

    if (typeof SessionManager.instance === "object") {
      return SessionManager.instance;
    }

    SessionManager.instance = this;
    return this;
  }

  save(data) {
    if (!this.isAlive()) sessionStorage.setItem(this.name, data);
  }

  getUser() {
    return sessionStorage.getItem(this.name);
  }

  remove() {
    if (this.isAlive()) sessionStorage.removeItem(this.name);
  }

  isAlive() {
    return !!sessionStorage.getItem(this.name);
  }
}
