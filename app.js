require('dotenv').config();

const Server = require('./models/server');

//36123078

const server = new Server();

server.listen();