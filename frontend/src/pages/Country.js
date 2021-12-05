import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { fetchSinToken } from '../helpers/fetch';

export default function Country() {

  const { params: { uuid } } = useRouteMatch( '/countries/:uuid' );
  const [country, setCountry] = useState({ name: '', uuid: '', numcode: '' });
  const history = useHistory();

  useEffect( () => {

    fetchSinToken( `countries/${uuid}` )
      .then( response => response.json() )
      .then( data => setCountry( data ) );

  }, []);

  const handleVolver = () => {

    history.push( '/countries' );

  };

  const handleBorrar = () => {


    fetchSinToken( 'countries', {
      uuid: country.uuid
    }, 'DELETE' )
      .then( response => response.json() )
      .then( data => {

        history.push( '/countries' );

      })
      .catch( error => {

        console.log( error );
        alert( 'error al borrar pais: ', error );

      });


  };

  return (
    <div>
      <h1>Country</h1>
      <div>
        <p>UUID: {country.uuid}</p>
        <p style={{ color: 'blue', textDecoration: 'underline' }}
          onClick={handleBorrar} >Name: {country.name}</p>
        <p>Numcode: {country.numcode}</p>
      </div>
      <button onClick={handleVolver} >Volver</button>
    </div>
  );

};
