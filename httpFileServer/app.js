const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../uploads/');                                  //change to volume directory
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({
  storage: storage
});

const app = express();
app.use('/uploads', express.static('../uploads'));            //change to volume directory
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/files', (req, res) => {
  var files = fs.readdirSync('../uploads');                   //change to volume directory
  res.json(files);
});

app.post('/file', upload.single('newfile'), (req, res) => {
  console.log(req.file)
  res.json("New file added");
});

app.listen(1919, () => console.log('Server started on port 1919'));