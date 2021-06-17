import { LitElement, html } from "lit-element";
import "../Input/index";
import "../Button/index";

const PASS_MIN_LENGTH = 8;

export class LoginForm extends LitElement {
  constructor() {
    super();
    this.email = "";
    this.password = "";
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
    if (this.validateEmail(this.email) && this.validatePass(this.password)) {
      console.log("VALID USER");
      //INICIAR SESION, GUARDAR FECHA DE INICIO EN EL NAVEGADOR
    } else {
      this.disabled = true;
    }
  }

  handleEmail({ detail }) {
    this.email = detail;
    this.disabled = !this.validateEmail(detail);
  }

  handlePassword({ detail }) {
    this.password = detail;
    this.disabled = !this.validatePass(detail);
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePass(pass) {
    return pass.length >= PASS_MIN_LENGTH;
  }

  render() {
    return html`
      <div class="form-container">
        <div class="login-inputs">
          <input-element
            name="email"
            @keypress=${this.handleEmail}
            type="text"
            placeholder="email"
          ></input-element>
          <input-element
            name="password"
            @keypress=${this.handlePassword}
            type="password"
            placeholder="password"
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
customElements.define("login-form", LoginForm);
