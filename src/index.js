'use strict';

const div = document.querySelector('#my-id');

// div.addEventListener('scroll', _.throttle(handleBodyScroll, 1000));
// div.addEventListener('scroll', _.debounce(handleBodyScroll, 1000));

// div.addEventListener('scroll', throttle(handleBodyScroll, 500));
div.addEventListener('scroll', debounce(handleBodyScroll, 500));

function handleBodyScroll() {
  console.log('scroll', new Date());
}

function throttle(callback, delay) {
  let id;

  return function() {
    if (id) {
      return;
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}

function debounce(callback, delay) {
  let id;

  return function() {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}
