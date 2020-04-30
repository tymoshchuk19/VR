const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./controllers/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.connect('mongodb://vr_service_mongo_1:27017/dbTP2VR', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Mongo ready: ' + mongoose.connection.readyState))
    .catch((erro) => console.log('Mongo: erro na conexão' + erro));


const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Accept', 'Authorization', 'Cache-Control', 'Content-Type', 'DNT', 'If-Modified-Since', 'Keep-Alive', 'Origin', 'User-Agent', 'X-Requested-With', 'Content-Length']
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOpts))

app.post('/register', (req, res) => {
  // Mock user
  const user = req.body
  users.newUser(user)
    .then(user => res.json(user));
});

app.post('/authenticate', (req, res) => {
  users.getUser(req.body.username)
    .then(user => {
      if(user && user.password === req.body.password) {
        jwt.sign({ user: req.body }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
          res.json({
            token
          });
        });
      } else {
        res.jsonp({ msg: 'Credenciais inválidas' })  
      }
    })
    .catch(err => res.jsonp(err));
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

app.listen(1920, () => console.log('Server started on port 1920'));
