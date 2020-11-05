const newYear = '1 Jan 2021';
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const spinner = document.querySelector('.spinner-center');

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerText = days
  hoursEl.innerText = hours
  minutesEl.innerText = minutes
  secondsEl.innerText = seconds
}

setInterval(countdown, 1000)
setTimeout(() => {
  spinner.classList.add('d-none');
}, 1000)