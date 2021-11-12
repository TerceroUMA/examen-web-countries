const express = require( 'express' );
const bcrypt = require( 'bcryptjs' );
const Usuario = require( '../models/Usuario' );

const crearUsuario = async ( req = express.request, res ) => {

  const { nombre, email, password, confPassword } = req.body;


  try {

    const usuario = await Usuario.findOne({ email: email });
    console.log( usuario );

    if ( usuario ) {

      return res.status( 400 ).json({
        ok: false,
        msg: 'Ya existe ese usuario'
      });

    } else if ( password !== confPassword ) {

      return res.status( 400 ).json({
        ok: false,
        msg: 'Las contraseñas no coinciden'
      });

    }

    const usuarioNuevo = new Usuario({ nombre, email, password });

    const salt = bcrypt.genSaltSync();
    usuarioNuevo.password = bcrypt.hashSync( password, salt );

    await Usuario.create( usuarioNuevo );

    return res.status( 201 ).json({
      ok: true,
      msg: 'Usuario creado satisfactoriamente'
    });

  } catch ( error ) {

    return res.status( 500 ).json({
      ok: false,
      msg: 'Error inesperado'
    });

  }

};

const iniciarSesion = async ( req = express.request, res ) => {

  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne({ email: email });

    if ( !usuario ) {

      return res.status( 400 ).json({
        ok: false,
        msg: 'El usuario con ese email no existe'
      });

    }

    const validPassword = bcrypt.compareSync( password, usuario.password );

    if ( !validPassword ) {

      return res.status( 400 ).json({
        ok: false,
        msg: 'Contraseña incorrecta'
      });

    }

    return res.status( 200 ).json({
      ok: true,
      msg: 'Inicio de sesión exitoso'
    });

  } catch ( error ) {

    return res.status( 400 ).json({
      ok: false,
      msg: 'Error inesperado'
    });

  }

};

module.exports = {
  crearUsuario,
  iniciarSesion
};
