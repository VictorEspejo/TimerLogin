import { LitElement, html, css } from 'lit-element';

export class InputElement extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      type: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
  }

  static get styles() {
    return css`
      input {
        margin: 40px 25px;
        width: 200px;
        display: block;
        border: none;
        padding: 10px 0;
        border-bottom: solid 1px #135ec0;
        -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
        transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
        background: -webkit-linear-gradient(
          top,
          rgba(255, 255, 255, 0) 96%,
          #135ec0 4%
        );
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 96%,
          #135ec0 4%
        );
        background-position: -200px 0;
        background-size: 200px 100%;
        background-repeat: no-repeat;
        color: #135ec0;
      }
      input:focus,
      input:valid {
        box-shadow: none;
        outline: none;
        background-position: 0 0;
      }
      input:focus::-webkit-input-placeholder,
      input:valid::-webkit-input-placeholder {
        color: #135ec0;
        font-size: 11px;
        visibility: visible;
      }

      input:failed {
        border-bottom: solid 1px #c02d13;
        -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
        transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      }
    `;
  }

  handleChange(e) {
    this.value = e.srcElement.value;
    this.dispatchEvent(
      new CustomEvent('input-changed', { detail: this.value })
    );
  }

  render() {
    return html`<input
      .type=${this.type}
      placeholder=${this.placeholder}
      @keyup="${this.handleChange}}"
    />`;
  }
}
customElements.define('input-element', InputElement);
