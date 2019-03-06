import "@babel/polyfill";
require("../scss/style.scss");
window.onload = function() {
  const timeToDegrees = (hand, value) =>
    hand === "hours" ? `${value * 30 + 180}deg` : `${value * 6 + 180}deg`;

  function setClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let time = {
      hours,
      minutes,
      seconds
    };

    Object.entries(time).forEach(handEl => {
      let hand = document.querySelector(`.${handEl[0]}`);

      if (handEl[1] == 0) {
        hand.style.transition = "none";
      } else {
        hand.style.transition = "all 0.1s ease-out";
      }

      hand.style.transform = `translatex(-50%) rotate(${timeToDegrees(
        handEl[0],
        handEl[1]
      )})`;
    });
    return seconds;
  }

  setClock();
  setInterval(setClock, 1000);
};
