import { LitElement, html, css } from "lit-element";
import "../../components/LoginForm/index";
import lockIcon from "../../assets/lock-icon.js";

class LoginPage extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  constructor() {
    super();
    this.password = "";
    this.email = "";
  }

  static get styles() {
    return css`
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .login-container {
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .login-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="login-container center">
        <div class="login-icon center">${lockIcon}</div>
        <div class="login-form">
          <login-form></login-form>
        </div>
      </div>
    `;
  }
}

customElements.define("login-page", LoginPage);
