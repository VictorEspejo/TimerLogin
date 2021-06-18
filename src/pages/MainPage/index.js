import { LitElement, html, css } from "lit-element";
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

  static styles = css`
    .main-page-container {
      width: 100%;
      height: 100%;
      padding: 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    .main-page-title {
      margin-top: 10%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .main-page-title h1,
    h3 {
      margin: 0;
      margin-bottom: 16px;
      padding: 0;
    }

    .main-page-title h3 {
      color: #757575fb;
    }

    timer-component {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  `;

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
    this.serviceManager.updateUserLastSessionDate(this.userName);
    this.logOutEvent();
  }

  logOutEvent() {
    this.dispatchEvent(
      new CustomEvent("logout", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <div class="main-page-container">
        <div class="main-page-title">
          <h1>Welcome!</h1>
          <h3>The last time you accessed was</h3>
        </div>
        <timer-component
          .date=${new Date(this.user.dateSession)}
        ></timer-component>
        <btn-element @click=${this.handleClick} text="LOGOUT"></btn-element>
      </div>
    `;
  }
}

customElements.define("main-page", MainPage);
