// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

export class DateDiffManager {
  constructor(actualDate, oldDate) {
    this.actualDate = actualDate;
    this.oldDate = oldDate;
    this.diff = actualDate.getTime() - oldDate.getTime();
  }

  getDays() {
    return Math.floor(this.diff / MILLISECONDS_OF_A_DAY);
  }

  getHours() {
    return Math.floor(
      (this.diff % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
    );
  }

  getMinutes() {
    return Math.floor(
      (this.diff % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
    );
  }

  getSecond() {
    return Math.floor(
      (this.diff % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    );
  }
}
