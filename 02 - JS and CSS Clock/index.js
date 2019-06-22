function setDate(){
  const now = new Date();

  const secondHand = document.querySelector('.second-hand');
  const sec = now.getSeconds();
  const secDeg = 90 + ((sec/60) * 360);
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  const minHand = document.querySelector('.min-hand');
  const min = now.getMinutes();
  const minDeg = 90 + ((min/60) * 360);
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  const hour = now.getHours();
  const hourDeg = 90 + ((hour/12) * 360);
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}



setInterval(setDate, 1000);

