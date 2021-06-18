import { LitElement, html, css } from 'lit-element';
import '../../components/LoginForm/index.js';
import lockIcon from '../../assets/lock-icon.js';
import ServiceManager from '../../service/database-service.js';

class LoginPage extends LitElement {
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

  connectedCallback() {
    super.connectedCallback();
    this.serviceManager = new ServiceManager();
  }

  handleSubmit({ detail }) {
    const { email, password } = detail;
    this.validateCredentials(email, password);
  }

  validateCredentials(email, password) {
    const userSaved = this.serviceManager.getUser(email);
    if (userSaved) {
      if (this.serviceManager.checkCredentials({ name: email, password })) {
        this.loginSuccess(email);
      } else {
        console.error('INVALID CREDENTIALS');
      }
    } else {
      this.serviceManager.setUser({ name: email, password });
      this.loginSuccess(email);
    }
  }

  loginSuccess(user) {
    this.dispatchEvent(
      new CustomEvent('login-success', {
        bubbles: true,
        composed: true,
        detail: user,
      }),
    );
  }

  render() {
    return html`
      <div class="login-container center">
        <div class="login-icon center">${lockIcon}</div>
        <div class="login-form">
          <login-form
            email=${this.email}
            password=${this.pas}
            @login-submit=${this.handleSubmit}
          ></login-form>
        </div>
      </div>
    `;
  }
}

customElements.define('login-page', LoginPage);
