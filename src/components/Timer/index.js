import { LitElement, html } from "lit-element";
import "../Number/index.js";

export class TimerComponent extends LitElement {
  static get properties() {
    return {
      dateSession: { type: String },
    };
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.dateSession = "";
  }

  render() {
    return html`<div>
      <time-number title="days"></time-number>
      <time-number title="hours"></time-number>
      <time-number title="minutes"></time-number>
      <time-number title="seconds"></time-number>
    </div>`;
  }
}
customElements.define("timer-component", TimerComponent);
