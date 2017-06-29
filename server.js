'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public/'));

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
})

app.post('/projects', bodyParser, function(req, res) {
  console.log(req.body);
  res.send('record posted to server');
})

function proxyGitHub(req, res) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(res, res);
}

app.get('/github/*', proxyGitHub);

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Note Found');
  next();
});

app.listen(PORT, function() {
  console.log('Listening on Port: ', PORT);
});
