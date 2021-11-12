const path = require( 'path' );
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
    this.app.use( express.static( path.join( __dirname, '../frontend/build' ) ) );

    // Lectura y parseo del body
    this.app.use( express.json() );

  }

  routes() {

    /* this.app.use( '/api/auth', require( './routes/auth' ) ); */
    /* this.app.use( '/api/events', require( './routes/events' ) ); */
  }

  listen() {

    this.app.listen( this.port, () => {

      console.log( `Servidor corriendo en puerto ${this.port}` );

    });

  }

}

module.exports = Server;
