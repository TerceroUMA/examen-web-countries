require( 'dotenv' ).config();
const Server = require( './models/Server' );

const server = new Server();
server.listen();

const Usuario = require( './models/Usuario' );
Usuario.create({ name: 'Juanads', email: 'jds', password: '123' });
