import { getHours, getMins, getSecs } from './timerUtils.js';

const template = value => `
<div class="timer">
  <span class="value">${value}</span>
  <div class="buttons">
    <button class="button stop" disabled>Stop</button>
    <button class="button start">Start</button>
  </div>
</div>
`;

export default function Timer({ selector }) {
  this.value = 0;
  this.id = undefined;

  document
    .querySelector(selector)
    .insertAdjacentHTML('beforeend', template(this.value));

  const refs = {
    value: document.querySelector(`${selector} .value`),
    stop: document.querySelector(`${selector} .stop`),
    start: document.querySelector(`${selector} .start`),
  };

  this.start = () => {
    if (this.id) {
      return;
    }

    this.id = setInterval(() => {
      const start = 1593055281011;

      const end = Date.now();
      const diff = end - start;

      const hours = getHours(diff)
        .toString()
        .padStart(2, 0);
      const minutes = getMins(diff)
        .toString()
        .padStart(2, 0);
      const seconds = getSecs(diff)
        .toString()
        .padStart(2, 0);

      refs.value.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
  };

  this.stop = () => {
    clearInterval(this.id);
    this.id = 0;
    refs.stop.setAttribute('disabled', true);
    refs.start.removeAttribute('disabled');
  };

  refs.stop.addEventListener('click', this.stop);
  refs.start.addEventListener('click', this.start);
}
