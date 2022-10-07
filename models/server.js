const express = require("express");
const cors = require('cors');
const socketController = require("../sockets/controller");


class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
        
        }



        //Middelewares --> siempre se va a ejectutar
        this.middlewares();

        //rutas de mi aplicaicon 
        this.routes();

        // Scokets
        this.sockets();

    }



    middlewares() {
        //cors
        this.app.use( cors() );


        //.use es para middlewares, en este caso usar directorio publico
        this.app.use(express.static('public'));


    }

    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        //servidor
        this.io.on('connection', socketController )
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listening at ${this.port}`)
        });
    }

}

module.exports = Server;