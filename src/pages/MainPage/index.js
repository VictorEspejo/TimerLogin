import { LitElement, html } from "lit-element";

class MainPage extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <h1>MAIN</h1> `;
  }
}

customElements.define("main-page", MainPage);
