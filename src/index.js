'use strict';

// ========= Counter =========
import Counter from './Counter.js';

const counter1 = new Counter({
  selector: '.counter-1',
  initialValue: 10,
  step: 10,
});

const counter2 = new Counter({
  selector: '.counter-2',
  initialValue: 5,
  step: 5,
});

// console.log(counter1);
// console.log(counter2);

counter1.handleIncrement();
counter1.handleIncrement();
counter1.handleIncrement();
counter1.handleIncrement();

counter2.handleDecrement();
counter2.handleDecrement();
counter2.handleDecrement();
counter2.handleDecrement();
counter2.handleDecrement();

document
  .querySelector('#b1-minus')
  .addEventListener('click', counter2.handleDecrement);
document
  .querySelector('#b1-plus')
  .addEventListener('click', counter2.handleIncrement);

// ========= Timer =========
import Timer from './Timer.js';

const timer1 = new Timer({ selector: '.timer-1' });
new Timer({ selector: '.timer-2' });

timer1.start();

// ========= Toastr =========
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

const button = document.querySelector('#message');
button.addEventListener('click', () => {
  // Display a success toast, with a title
  toastr.error('My Title', 'My Message');
});
