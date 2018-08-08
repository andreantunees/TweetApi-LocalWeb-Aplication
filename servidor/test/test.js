'use strict';

let requisicao = require(`${process.cwd()}/src/controllers.js`);
let server = 'http://localhost:3000';
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('requisicao',function(){

    it('Requisição Most Mentions', function(done){
        chai.request(server).get('/most_mentions').end(function(err, res){
            res.should.have.status(200);
            done();
        });
    });

    it('Requisição Most Relevants', function(done){
        chai.request(server).get('/most_relevants').end(function(err, res){
            res.should.have.status(200);
            done();
        }); 
    });
});
