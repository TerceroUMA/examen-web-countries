require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );

const dbConnection = async () => {

  try {

    await mongoose.connect( process.env.DB_CNN );
    console.log( 'DB Online' );

  } catch ( e ) {

    throw new Error( 'Error a la hora de conectar a la BD' );

  }

};

module.exports = {
  dbConnection
};
