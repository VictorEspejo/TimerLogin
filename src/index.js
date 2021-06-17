import { LitElement, html, css } from "lit-element";
import getRouterPages from "./pages/router-pages.js";
import SessionManager from "./service/session-manager.js";
const DEFAULT_PAGE = "login";

class AppLogin extends LitElement {
  constructor() {
    super();
    this.currentPage = DEFAULT_PAGE;
  }

  static get properties() {
    return {
      currentPage: { type: String },
    };
  }

  static get styles() {
    return css`
      .app-container {
        margin: 0;
        width: 100%;
        height: 100vh;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.session = new SessionManager("user-session");
    this.sessionActive();
    this.addEventListener("login-success", (e) => this.loginSuccess(e));
    this.addEventListener("logout", () => this.logOut());
  }

  sessionActive() {
    if (this.session.isAlive()) this.changeRoute("main");
  }

  loginSuccess({ detail: user }) {
    if (user) {
      this.session.save(user);
      this.sessionActive();
    } else {
      this.changeRoute("login");
    }
  }

  logOut() {
    this.session.remove();
    this.changeRoute("login");
  }

  changeRoute(page = this.currentPage) {
    this.currentPage = page;
  }

  render() {
    return html`<div class="app-container">
      ${getRouterPages(this.currentPage)}
    </div>`;
  }
}

customElements.define("app-login", AppLogin);
