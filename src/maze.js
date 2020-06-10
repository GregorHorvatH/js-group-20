'use strict';

const refs = {
  start: document.querySelector('.start'),
  finish: document.querySelector('.finish'),
  indicator: document.querySelector('#indicator'),
  maze: document.getElementById('maze'),
};

let isPlay = false;

refs.start.addEventListener('mouseover', handleStartMouseOver);
refs.finish.addEventListener('mouseover', handleFinishMouseOver);
refs.maze.addEventListener('mouseover', handleMazeEnter);
refs.maze.addEventListener('mouseleave', handleMazeLeave);

function handleMazeEnter(e) {
  if (isPlay && e.target.classList.contains('block')) {
    isPlay = false;
    refs.indicator.textContent = 'You loose!';
  }
}

function handleMazeLeave() {
  if (isPlay) {
    refs.indicator.textContent = 'Pause';
    isPlay = false;
  }
}

function handleStartMouseOver() {
  refs.indicator.textContent = 'Play';
  isPlay = true;
}

function handleFinishMouseOver() {
  if (isPlay) {
    refs.indicator.textContent = 'Winner';
    isPlay = false;
  }
}
