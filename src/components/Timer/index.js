import { LitElement, html, css } from "lit-element";
import { DateDiffManager } from "../../utils/date-manager.js";
import "../Number/index.js";

export class TimerComponent extends LitElement {
  constructor() {
    super();
    this.date = new Date();
    this.actualDate = new Date();
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  static get properties() {
    return {
      date: { type: Object },
      days: { type: Number },
      hours: { type: Number },
      minutes: { type: Number },
      seconds: { type: Number },
    };
  }

  static styles = css`
    .timer-number-container {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      font-family: Georgia, "Times New Roman", Times, serif;
    }

    time-number {
      margin: 0 8px 0 8px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.getTimerData();
  }

  getTimerData() {
    const dateDiffManager = new DateDiffManager(this.actualDate, this.date);
    this.days = dateDiffManager.getDays();
    this.hours = dateDiffManager.getHours();
    this.minutes = dateDiffManager.getMinutes();
    this.seconds = dateDiffManager.getSecond();
  }

  render() {
    return html`<div class="timer-number-container">
      <time-number id="time_day" title="days" number=${this.days}></time-number>
      <time-number
        id="time_hour"
        title="hours"
        number=${this.hours}
      ></time-number>
      <time-number
        id="time_minute"
        title="minutes"
        number=${this.minutes}
      ></time-number>
      <time-number
        id="time_second"
        title="seconds"
        number=${this.seconds}
      ></time-number>
    </div>`;
  }
}
customElements.define("timer-component", TimerComponent);
