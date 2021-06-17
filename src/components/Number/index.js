import { LitElement, html } from "lit-element";

export class TimeNumber extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
  }

  render() {
    return html`<h1>00</h1>`;
  }
}
customElements.define("time-number", TimeNumber);
