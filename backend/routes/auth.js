/*
    Rutas del usuario /auth
    host + /api/auth
*/


const { Router } = require( 'express' );
const { crearUsuario, iniciarSesion } = require( '../controllers/auth' );
const { check } = require( 'express-validator' );
const { validarCampos } = require( '../middlewares/validar-campos' );


// const { check } = require( 'express-validator' );
// const { crearUsuario, loginUsuario, revalidarToken } = require( '../controllers/auth' );
// const { validarCampos } = require( '../middlewares/validar-campos' );
// const { validarJWT } = require( '../middlewares/validar-jwt' );
const router = Router();

router.post( '/new', [
  check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
  check( 'email', 'El email es obligatorio' ).not().isEmpty(),
  check( 'email', 'Email no válido' ).isEmail(),
  check( 'password', 'El password es obligatorio' ).not().isEmpty(),
  check( 'password', 'El password debe ser de 6 caracteres como mínimo' ).isLength({ min: 6 }),
  validarCampos
], crearUsuario );

router.post( '/', [
  check( 'email', 'El email es obligatorio' ).not().isEmpty(),
  check( 'email', 'Email no válido' ).isEmail(),
  check( 'password', 'El password es obligatorio' ).not().isEmpty(),
  validarCampos
], iniciarSesion );


/* router.get( '/renew', validarJWT, revalidarToken ); */


module.exports = router;
