const { Schema, model } = require( 'mongoose' );

const countrySchema = Schema({

  uuid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  numcode: {
    type: Number,
    required: true,
    unique: true
  }
});


module.exports = model( 'Country', countrySchema ); // Se pone el segundo parametro como nombre pero en plural
