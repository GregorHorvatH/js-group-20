const express = require('express');
// const uuid4 = require('uuid4');
const { myIdGenerator } = require('./utils');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello from backend</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/id', (req, res) => {
  // const id = uuid4();
  const id = myIdGenerator();
  // console.log(utils.myIdGenerator());

  res.send(id.toString());
});

app.get('*', (req, res) => {
  res.send('404');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
