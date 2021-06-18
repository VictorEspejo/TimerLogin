// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

export const DateDiffManager = (() => {
  function getDays(diff) {
    return Math.floor(diff / MILLISECONDS_OF_A_DAY);
  }

  function getHours(diff) {
    return Math.floor((diff % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
  }

  function getMinutes(diff) {
    return Math.floor(
      (diff % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
    );
  }

  function getSecond(diff) {
    return Math.floor(
      (diff % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    );
  }

  return {
    days: getDays,
    hour: getHours,
    minutes: getMinutes,
    seconds: getSecond,
  };
})();
