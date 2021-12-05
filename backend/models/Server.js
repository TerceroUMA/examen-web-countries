const express = require( 'express' );
const cors = require( 'cors' );
const { dbConnection } = require( '../database/config' );

class Server {

  constructor() {

    this.port = process.env.PORT || 8080;
    this.app = express();
    this.middleware();
    this.routes();

    // Base de datos
    dbConnection();

  }

  middleware() {

    // CORS
    this.app.use( cors() );

    // Directorio público
    this.app.use( express.static( 'public' ) );

    // Lectura y parseo del body
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) ); // parses application/x-www-form-urlencoded

  }

  routes() {

    this.app.use( '/api/auth', require( '../routes/auth' ) );
    this.app.use( '/api/countries', require( '../routes/country' ) );

  }

  listen() {

    this.app.listen( this.port, () => {

      console.log( `Servidor corriendo en puerto ${this.port}` );

    });

  }

}

module.exports = Server;
