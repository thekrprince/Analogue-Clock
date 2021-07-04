const hourHand = document.querySelector('.hand-hr');
const minuteHand = document.querySelector('.hand-min');
const secondHand = document.querySelector('.hand-sec');

function getTime() {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegree = (hours / 60 / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(getTime, 1000);
