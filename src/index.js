import { LitElement, html, css } from "lit-element";
import getRouterPages from "./pages/router-pages.js";

class AppLogin extends LitElement {
  static get properties() {
    return {};
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

  constructor() {
    super();
  }

  render() {
    return html`<div class="app-container">${getRouterPages("login")}</div>`;
  }
}

customElements.define("app-login", AppLogin);
