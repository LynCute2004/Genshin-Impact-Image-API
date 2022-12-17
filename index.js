const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");

const { ClientError, ServerError } = require('./utils/error');

const endpoints = require("./lib/endpoint");

app.use(cors());

app.use('/api', require('./routes/api'));

// Error Handler
app.use((err, req, res, next) => {
  if (err instanceof ClientError || err instanceof ServerError) {
    res.status(err.status).json({
      message: err.message
    })
  } else {
    res.status(500).json({
      message: 'An error has occurred. Please try again!'
    })
  }
});

app.get ("/", (req, res) => res.send('Ok!'))

// Get Char Image
app.get("/api/genshin/character", (req, res) => {
  res.json({url: fs.readdirSync('public/images/character')[Math.floor(Math.random() * fs.readdirSync('public/images/character').length)]})
});

let Charfolders = fs.readdirSync('public/images')
for (const folder of Charfolders){
  let files = fs.readdirSync(`public/images/${folder}`)
  console.log(`${folder}: ${files.length}`)
files.forEach(f => {
  app.get(`/images/${f}`, (req, res) => {
    fs.createReadStream(`public/images/${folder}/${f}`).pipe(res)
  })
})
};

// Get Cos Image
app.get("/api/genshin/cosplay", (req, res) => {
  res.json({url: fs.readdirSync('public/images/cosplay')[Math.floor(Math.random() * fs.readdirSync('public/images/cosplay').length)]})
});

let Cosfolders = fs.readdirSync('public/images')
for (const folder of Cosfolders){
  let files = fs.readdirSync(`public/images/${folder}`)
  console.log(`${folder}: ${files.length}`)
files.forEach(f => {
  app.get(`/images/${f}`, (req, res) => {
    fs.createReadStream(`public/images/${folder}/${f}`).pipe(res)
  })
})
};

// Status 404
app.use((req, res) => {
  res.status(404).send({error: "404 Not Found"})
});

// App ready!
app.listen(process.env.PORT, () => {
  console.log(`Connected. Listening on port ${process.env.PORT || 3005 }!`)
});

module.exports = app;
