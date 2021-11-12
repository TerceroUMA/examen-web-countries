const express = require( 'express' );
const bcrypt = require( 'bcryptjs' );
const Usuario = require( '../models/Usuario' );

const crearUsuario = async ( req = express.request, res ) => {

  // TODO: Controlar que me envien los datos
  const { nombre, email, password } = req.body;


  try {

    const usuario = await Usuario.findOne({ email: email });
    console.log( usuario );

    if ( usuario ) {

      return res.status( 400 ).json({
        ok: false,
        msg: 'Ya existe ese usuario'
      });

    }

    const usuarioNuevo = new Usuario({ nombre, email, password });

    const salt = bcrypt.genSaltSync();
    usuarioNuevo.password = bcrypt.hashSync( password, salt );

    await Usuario.create( usuarioNuevo );

    return res.status( 201 ).json({
      ok: true,
      msg: 'Creado'
    });

  } catch ( error ) {

    return res.status( 500 ).json({
      ok: false,
      msg: 'Error inesperado'
    });

  }

};


module.exports = {
  crearUsuario
};
