'use strict';

let express = require('express');
let cors = require('cors');
let app = express();
let port = 3000;

app.use(cors());

let routes = require('./src/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({  url: 'Endereço não encontrado: ' + req.originalUrl});
});

app.listen(port, function() {
  console.log('Escutando a porta ' + port);
});

module.exports.app = app;