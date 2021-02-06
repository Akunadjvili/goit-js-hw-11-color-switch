const colorChanger = {
  intervalHandle: null,
  colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  changeRandomBgColor() {
    const indexRandomColor = this.randomIntegerFromInterval(
      0,
      this.colors.length - 1,
    );
    document.body.style.backgroundColor = this.colors[indexRandomColor];
  },
  start() {
    if (this.intervalHandle) {
      return;
    }

    this.intervalHandle = setInterval(
      this.changeRandomBgColor.bind(this),
      1000,
    );
  },
  stop() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = null;
  },
};
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"'),
};

refs.startBtn.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stopBtn.addEventListener('click', colorChanger.stop.bind(colorChanger));

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const refs = {
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"'),
// };
// let intervalHandle = null;

// function changeRandomBgColor() {
//   const indexRandomColor = randomIntegerFromInterval(0, colors.length - 1);
//   document.body.style.backgroundColor = colors[indexRandomColor];
// }

// function startChangeColorHandler(event) {
//   intervalHandle = setInterval(changeRandomBgColor, 1000);
//   refs.startBtn.removeEventListener('click', startChangeColorHandler);
//   refs.stopBtn.addEventListener('click', stopChangeColorHandler);
// }
// function stopChangeColorHandler(event) {
//   clearInterval(intervalHandle);
//   refs.stopBtn.removeEventListener('click', stopChangeColorHandler);
//   refs.startBtn.addEventListener('click', startChangeColorHandler);
// }

// refs.startBtn.addEventListener('click', startChangeColorHandler);
