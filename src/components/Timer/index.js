import { LitElement, html } from "lit-element";
import { DateDiffManager } from "../../utils/date-manager.js";
import "../Number/index.js";

export class TimerComponent extends LitElement {
  static get properties() {
    return {
      date: { type: Object },
      days: { type: Number },
      hours: { type: Number },
      minutes: { type: Number },
      seconds: { type: Number },
    };
  }

  constructor() {
    super();
    this.date = new Date();
    this.actualDate = new Date();
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    const dateDiffManager = new DateDiffManager(this.actualDate, this.date);
    this.days = dateDiffManager.getDays();
    this.hours = dateDiffManager.getHours();
    this.minutes = dateDiffManager.getMinutes();
    this.seconds = dateDiffManager.getSecond();
  }

  render() {
    return html`<div>
      <time-number title="days" number=${this.days}></time-number>
      <time-number title="hours" number=${this.hours}></time-number>
      <time-number title="minutes" number=${this.minutes}></time-number>
      <time-number title="seconds" number=${this.seconds}></time-number>
    </div>`;
  }
}
customElements.define("timer-component", TimerComponent);
