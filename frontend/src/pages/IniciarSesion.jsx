import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';
import { fetchSinToken } from '../helpers/fetch';

const IniciarSesion = props => {


  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formLoginValues;

  const handleSubmit = async ( e ) => {

    e.preventDefault();

    const respuesta = await fetchSinToken( 'auth', { email, password }, 'POST' );

    const body = await respuesta.json();

    console.log( body );

  };

  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={ handleSubmit } >

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={ handleLoginInputChange }
        />
        <input type="password"
          name="password"
          placeholder="Password"
          onChange={ handleLoginInputChange }
        />

        <button>Iniciar sesión</button>
      </form>
    </div>
  );

};

IniciarSesion.propTypes = {

};

export default IniciarSesion;
