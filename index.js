const server = require('express')();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://KingCosmic:King9311@ds139960.mlab.com:39960/bifrost')

const bodyparser = require('body-parser');

server.use(bodyparser.json());
server.use(require('./routes'))

const request = require('request');

server.listen(4000, () => {
  console.log('listening in port: 4000');
})