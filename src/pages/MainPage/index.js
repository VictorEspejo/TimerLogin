import { LitElement, html } from "lit-element";
import "../../components/Button/index";

class MainPage extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("logout", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <h1>Welcome</h1>
      <h3>The last time you accessed was</h3>
      <p></p>
      <btn-element
        @click=${this.handleClick}
        text="Cerrar Sesion"
      ></btn-element>
    `;
  }
}

customElements.define("main-page", MainPage);
