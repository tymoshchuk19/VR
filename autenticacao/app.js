const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./controllers/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://tp2_service1_1:27017/dbTP2VR', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Mongo ready: ' + mongoose.connection.readyState))
    .catch((erro) => console.log('Mongo: erro na conexão' + erro));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/register', (req, res) => {
  // Mock user
  const user = req.body
  users.newUser(user)
    .then(user => res.json(user));
});

app.post('/authenticate', (req, res) => {
  jwt.sign({ user: req.body }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
    res.json({
      token
    });
  });
});

app.get('/authenticated', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Utilizador autenticado!',
        authData
      });
    }
  });
});


// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Check if bearer is undefined
  if(req.headers['authorization']) {
    // Set the token
    req.token = req.headers['authorization']
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(1919, () => console.log('Server started on port 1919'));