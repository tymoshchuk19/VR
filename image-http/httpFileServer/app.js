const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
const volumepath = '../../../data/files/';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, volumepath);                                  //change to volume directory
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const upload = multer({
  storage: storage
});

const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Accept', 'Authorization', 'Cache-Control', 'Content-Type', 'DNT', 'If-Modified-Since', 'Keep-Alive', 'Origin', 'User-Agent', 'X-Requested-With', 'Content-Length']
}

function verifyAuth(req, res, next){
  if(req.headers['authorization']) {
    // Set the token
    req.token = req.headers['authorization']
    axios.get('http://vr_service2_1:1920/authenticated', {
      headers: {
        Authorization: req.token 
      }
    })
      .then(() => next())
      .catch(() => res.sendStatus(403));
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

const app = express();
app.use('/uploads', express.static(volumepath));            //change to volume directory
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOpts))

app.get('/files', verifyAuth, (req, res) => {
  var files = fs.readdirSync(volumepath);                   //change to volume directory
  res.json(files);
});

app.delete('/file/:filename', verifyAuth,(req, res) => {
  fs.unlinkSync(volumepath + req.params.filename);
  var files = fs.readdirSync(volumepath);                   //change to volume directory
  res.json(files);
});

app.post('/file', verifyAuth, upload.single('newfile'), (req, res) => {
  res.json("New file added");
});

app.listen(1919, () => console.log('Server started on port 1919'));