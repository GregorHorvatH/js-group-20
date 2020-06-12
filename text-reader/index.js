const cursor = document.createElement('div');
cursor.classList.add('cursor');

const title = document.querySelector('.title');
const text = document.querySelector('.text');

title.after(cursor);

text.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `top: ${e.pageY}px;`);
});

title.addEventListener('select', e => {
  console.log(e);
});
