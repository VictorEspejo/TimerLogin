import { LitElement, html } from 'lit-element';
import '../Input/index.js';
import '../Button/index.js';
import { validateEmail, validatePass } from '../../utils/validations.js';

export class LoginForm extends LitElement {
  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.disabled = false;
  }

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
      disabled: { type: Boolean },
    };
  }

  handleClick() {
    if ((validateEmail(this.email), validatePass(this.password))) {
      const { email, password } = this;
      this.dispatchEvent(
        new CustomEvent('login-submit', { detail: { email, password } })
      );
    } else {
      this.disabled = true;
    }
  }

  handleEmail({ detail }) {
    this.email = detail;
    this.disabled = !validateEmail(detail);
  }

  handlePassword({ detail }) {
    this.password = detail;
    this.disabled = !validatePass(detail);
  }

  render() {
    return html`
      <div class="form-container">
        <div class="login-inputs">
          <input-element
            name="email"
            @input-changed=${this.handleEmail}
            type="text"
            placeholder="email"
            required
          ></input-element>
          <input-element
            name="password"
            @input-changed=${this.handlePassword}
            type="password"
            placeholder="password"
            required
          ></input-element>
        </div>
        <div class="login-btn">
          <btn-element
            text="Enviar"
            @click=${this.handleClick}
            ?disabled=${this.disabled}
          ></btn-element>
        </div>
      </div>
    `;
  }
}
customElements.define('login-form', LoginForm);
