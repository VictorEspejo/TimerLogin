import { LitElement, html, css } from 'lit-element';

export class TimeNumber extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      number: { type: String },
    };
  }

  static get styles() {
    return css`
      .number-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h1,
      h3 {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', 'Serif';
        color: #757575fb;
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.number = '00';
  }

  fillNumber() {
    if (this.number.length === 1) {
      this.number = '0'.concat(this.number);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.fillNumber();
  }

  render() {
    return html`<div class="number-container">
      <h1>${this.number}</h1>
      <h3>${this.title}</h3>
    </div>`;
  }
}
customElements.define('time-number', TimeNumber);
