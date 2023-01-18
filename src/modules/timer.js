"use strict";

const timer = (deadline) => {
  const timerHours = document.querySelectorAll(".count_2 span");
  const timerMinutes = document.querySelectorAll(".count_3 span");
  const timerSeconds = document.querySelectorAll(".count_4 span");
  const timerDays = document.querySelectorAll(".count_1 span");
  const timerItems = document.querySelectorAll(".count span");

  let timerDaysText;
  let timerHoursText;
  let timerMinutesText;
  let timerSecondsText;

  let timerInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 3600 / 24);

    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const calculateClock = () => {
    let getTime = getTimeRemaining();
    timerDaysText =
      getTime.days.toString().length === 1 ? "0" + getTime.days : getTime.days;
    timerHoursText =
      getTime.hours.toString().length === 1
        ? "0" + getTime.hours
        : getTime.hours;
    timerMinutesText =
      getTime.minutes.toString().length === 1
        ? "0" + getTime.minutes
        : getTime.minutes;
    timerSecondsText =
      getTime.seconds.toString().length === 1
        ? "0" + getTime.seconds
        : getTime.seconds;
    return getTime.timeRemaining;
  };

  const updateClock = () => {
    timerDays.forEach((item) => {
      item.textContent = timerDaysText;
    });

    timerHours.forEach((item) => {
      item.textContent = timerHoursText;
    });

    timerMinutes.forEach((item) => {
      item.textContent = timerMinutesText;
    });

    timerSeconds.forEach((item) => {
      item.textContent = timerSecondsText;
    });
  };

  if (calculateClock() > 0) {
    timerInterval = setInterval(() => {
      calculateClock();
      updateClock();
    }, 1000);
  } else {
    clearInterval(timerInterval);

    timerItems.forEach((item) => {
      item.textContent = "00";
    });
  }
};

export default timer;
