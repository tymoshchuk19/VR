const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../data/files/');                                  //change to volume directory
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

const app = express();
app.use('/uploads', express.static('../data/files/'));            //change to volume directory
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOpts))

app.get('/files', (req, res) => {
  var files = fs.readdirSync('../data/files/');                   //change to volume directory
  res.json(files);
});

app.post('/file', upload.single('newfile'), (req, res) => {
  res.json("New file added");
});

app.listen(1919, () => console.log('Server started on port 1919'));