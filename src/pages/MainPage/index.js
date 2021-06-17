import { LitElement, html } from "lit-element";
import "../../components/Button/index";
import "../../components/Timer/index";
import SessionManager from "../../service/session-manager";
import { ServiceManager } from "../../service/database-service";

class MainPage extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      userName: { type: String },
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    const sessionManager = new SessionManager();
    this.serviceManager = new ServiceManager();
    this.userName = sessionManager.getUser();
    if (this.serviceManager.getUser(this.userName)) {
      this.user = this.serviceManager.getUser(this.userName);
    } else {
      this.logOutEvent();
    }
  }

  handleClick() {
    //this.serviceManager.updateUserLastSessionDate(this.userName);
    this.logOutEvent();
  }

  logOutEvent() {
    this.dispatchEvent(
      new CustomEvent("logout", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <h1>Welcome</h1>
      <h3>The last time you accessed was</h3>
      <timer-component
        .date=${new Date(this.user.dateSession)}
      ></timer-component>
      <btn-element
        @click=${this.handleClick}
        text="Cerrar Sesion"
      ></btn-element>
    `;
  }
}

customElements.define("main-page", MainPage);
