import { LitElement, html, css } from "lit-element";

export class BtnElement extends LitElement {
  constructor() {
    super();
    this.disabled = false;
    this.text = "";
  }

  static get properties() {
    return {
      disabled: { type: Boolean },
      text: { type: String },
    };
  }

  static styles = css`
    .btn-material {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      border: none;
      border-radius: 4px;
      padding: 0 16px;
      min-width: 100%;
      height: 36px;
      vertical-align: middle;
      text-align: center;
      text-overflow: ellipsis;
      text-transform: uppercase;
      color: white;
      background-color: #135ec0;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      font-family: "Roboto", "Segoe UI", system-ui, -apple-system;
      font-size: 14px;
      font-weight: 500;
      line-height: 36px;
      overflow: hidden;
      outline: none;
      cursor: pointer;
      transition: box-shadow 0.2s;
    }

    .btn-material::-moz-focus-inner {
      border: none;
    }

    /* Overlay */
    .btn-material::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      opacity: 0;
      transition: opacity 0.2s;
    }

    /* Ripple */
    .btn-material::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      padding: 50%;
      width: 32px; /* Safari */
      height: 32px; /* Safari */
      background-color: white;
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 1s, transform 0.5s;
    }

    /* Hover, Focus */
    .btn-material:hover,
    .btn-material:focus {
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .btn-material:hover::before {
      opacity: 0.08;
    }

    .btn-material:focus::before {
      opacity: 0.24;
    }

    .btn-material:hover:focus::before {
      opacity: 0.3;
    }

    /* Active */
    .btn-material:active {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .btn-material:active::after {
      opacity: 0.32;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0s;
    }

    /* Disabled */
    .btn-material:disabled {
      color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
      background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
      box-shadow: none;
      cursor: initial;
    }

    .btn-material:disabled::before {
      opacity: 0;
    }

    .btn-material:disabled::after {
      opacity: 0;
    }
  `;

  render() {
    return html`<button class="btn-material" ?disabled=${this.disabled}>
      ${this.text}
    </button>`;
  }
}
customElements.define("btn-element", BtnElement);
