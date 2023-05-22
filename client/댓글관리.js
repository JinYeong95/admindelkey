const timeLogElements = document.querySelectorAll('.time-log');
const currentTime = new Date();
const hours = currentTime.getHours().toString().padStart(2, '0');
const minutes = currentTime.getMinutes().toString().padStart(2, '0');
const seconds = currentTime.getSeconds().toString().padStart(2, '0');
const timeLog = `${hours}:${minutes}:${seconds}`;

timeLogElements.forEach((element) => {
  element.textContent = timeLog;
});