const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");

const { ClientError, ServerError } = require('./utils/error');

let endpoints = require("./lib/endpoint");

const base_url = "https://gi-img-api.ak-team.repl.co/";

app.use(cors());


// Error 
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

app.get ("/", (req, res) => res.send("Welcome to my site! Github: https://github.com/LynCute2004/Genshin-Impact-Image-API"));

const axios = require("axios");

app.get("/api/genshin/:endpoint", (req, res) => {
    if(endpoints.includes(req.params.endpoint)) {
        axios.get(base_url + "api" + "/" + "genshin" + "/" + req.params.endpoint).then((response) => {   
           res.json({"url": response.data.url})         
          // console.log('RES:', response.data.url) 
        })   
        } else {
            res.send({"status": "Error!"});
        }});

// Status 404
app.use((req, res) => {
    res.status(404).send({error: "404 Not Found!"})
  });
  
  // App ready!
  app.listen(process.env.PORT, () => {
    console.log(`Connected to server. Listening on port ${process.env.PORT || 3005 }!`)
  });
  
  module.exports = app;
