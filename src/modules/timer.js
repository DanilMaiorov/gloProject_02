const timer = deadline => {
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');

  const getTimeRemaining = () => {
    const dateNow = new Date().getTime();
    const dateStop = new Date(deadline).getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const hours = Math.floor((timeRemaining / 60 / 60)/*  % 24 */);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, hours, minutes, seconds };
  };

  const timeText = (text, time) => {
    text.textContent = (time < 10) ? `0${time}` : time;
  };

  const updateCLock = () => {
    const getTime = getTimeRemaining();
    timeText(timerHours, getTime.hours);
    timeText(timerMinutes, getTime.minutes);
    timeText(timerSeconds, getTime.seconds);
    if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
      clearInterval(updateCLock);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  updateCLock();

  setInterval(updateCLock, 1000);
};

export default timer;
