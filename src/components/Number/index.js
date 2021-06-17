import { LitElement, html } from "lit-element";

export class TimeNumber extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      number: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.number = "00";
  }

  fillNumber = () => {
    if (this.number.length === 1) {
      this.number = "0".concat(this.number);
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.fillNumber();
  }

  render() {
    return html`<h1>${this.number}</h1>`;
  }
}
customElements.define("time-number", TimeNumber);
