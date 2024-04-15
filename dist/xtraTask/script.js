'use strict'

const dayPart = document.querySelector('.partDay');
const weekPart = document.querySelector('.weekDay');
const newYearDate = document.querySelector('.newYear');
const newYearDay = document.querySelector('.newYearDay');
const newYear = "01 january 2025";

const week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

const timerHours = document.querySelector('.hour');
const timerMinutes = document.querySelector('.minute');
const timerSeconds = document.querySelector('.second');
const amPm = document.querySelector('.ampm');

const wordForms = (number, wordArr) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    const options = [2, 0, 1, 1, 1, 2];
    return wordArr[(number % 100 > 4 && number % 100 < 20) ? 2 : options[(number % 10 < 5) ? number % 10 : 5]];
  }
  return wordArr[1];
};

const getTimeRemaining = (newYear) => {
  const dateNow = new Date().getTime();
  const dateStop = new Date(newYear).getTime();
  const timeRemaining = (dateStop - dateNow) / 1000;
  const days = Math.floor((timeRemaining / 60 / 60 / 24));
  const hours = Math.floor(((dateNow + 18000000) / 1000 / 60 / 60) % 24);
  const minutes = Math.floor(((dateNow + 18000000) / 1000 / 60) % 60);
  const seconds = Math.floor(((dateNow + 18000000) / 1000) % 60);

  return { timeRemaining, days, hours, minutes, seconds };
};

const updateCLock = () => {
  const getTime = getTimeRemaining(newYear);
  amPm.innerHTML = "";
  timerHours.textContent = (getTime.hours < 12) ? `0${getTime.hours}` : getTime.hours - 12;
  timerMinutes.textContent = (getTime.minutes < 10) ? `0${getTime.minutes}` : getTime.minutes;
  timerSeconds.textContent = (getTime.seconds < 10) ? `0${getTime.seconds}` : getTime.seconds;
  amPm.innerHTML = `${(getTime.hours < 12) ? ` AM` : ` PM`}`;

  if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
    clearInterval(updateCLock);
    timerHours.textContent = "C НОВЫМ ГОДОМ!";
    timerMinutes.innerHTML = "";
    timerSeconds.innerHTML = "";
  }
};

const updateDay = () => {
  const getTime = getTimeRemaining(newYear);
  newYearDate.textContent = (getTime.days < 10) ? `0${getTime.days}` : getTime.days;
  newYearDay.textContent = wordForms(getTime.days, ['день', 'дня', 'дней']);
  if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
    clearInterval(updateCLock);
    newYearDate.textContent = "НОВЫЙ ГОД!";
    newYearDay.textContent = "";
  }
};

const updateWeekDay = () => {
  const weekDay = new Date().getDay();
  week.forEach((day, i) => {
    if (i === weekDay) {
      weekPart.textContent = day.slice(0, 1).toUpperCase() + day.slice(1).toLowerCase();
    }
  });
};

const updatePartDate = () => {
  const partDay = new Date().getHours();
  if (partDay > 0 && partDay < 5) {
    dayPart.textContent = "Доброй ночи";
  } else if (partDay > 5 && partDay < 12) {
    dayPart.textContent = "Доброе утро";
  } else if (partDay > 12 && partDay < 17) {
    dayPart.textContent = "Доброй день";
  } else if (partDay > 17 && partDay < 24) {
    dayPart.textContent = "Добрый вечер";
  } else {
    dayPart.textContent = "Здравствуйте";
  }
};

const dateUpdater = () => {
  updatePartDate();
  updateWeekDay();
  updateWeekDay();
  updateDay();
};

dateUpdater();
setInterval(dateUpdater, 30000);

updateCLock();
setInterval(updateCLock, 1000);
