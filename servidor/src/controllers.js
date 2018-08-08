'use strict';

let request = require('request');
let fun = require(`${process.cwd()}/src/business/functions.js`);
let twitterApi = 'http://tweeps.locaweb.com.br/tweeps';

exports.mostRelevants = function(req, res) {
  request(
    twitterApi, { headers: { Username: process.env.HTTP_USERNAME }, json: true },
    function(err, resApi, body) {
      let resposta = fun.montarRespostaTwitter(body.statuses);
      res.json(resposta);
    });
}

exports.mostMentions = function(req, res) {
  request(
    twitterApi, { headers: {Username: process.env.HTTP_USERNAME }, json: true},
    function (err,respApi,body) {
      let resposta = fun.montarRespostaUsuario(body.statuses);
      res.json(resposta);
    });
}
