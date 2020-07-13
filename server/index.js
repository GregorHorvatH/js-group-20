const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { uuid } = require('uuidv4');

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const data = require('./data');

// ===== users =====
const users = [
  {
    id: 1,
    name: 'Bobby',
  },
];

app.get('/users', function(req, res) {
  res.send(users);
});

app.post('/users', function(req, res) {
  const newUser = {
    id: uuid(),
    ...req.body,
  };

  users.push(newUser);

  res.send(newUser);
});

// ===== users end =====

app.get('/', function(req, res) {
  res.send('Hello from express 123!');
});

app.get('/cats', function(req, res) {
  res.status(503);

  setTimeout(() => res.send(data), 1000);
});

app.get('/dogs', function(req, res) {
  res.json({
    name: 'Tuzik',
    age: 2,
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
