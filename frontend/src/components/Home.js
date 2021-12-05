import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSinToken } from '../helpers/fetch';
import { pruebaTypes } from '../types/pruebaTypes';

export const Home = () => {

  const [countries, setCountries] = useState([]);
  const [hayDatos, setHayDatos] = useState( false );

  useEffect( () => {

    fetchSinToken( 'countries' )
      .then( response => response.json() )
      .then( data => {

        setCountries( data );
        setHayDatos( true );
        console.log( data );

      });

  }, []);


  if ( !hayDatos ) {

    return <div>Cargando...</div>;

  }

  return (
    <div>
      <h1>Countries</h1>

      {
        // eslint-disable-next-line react/display-name
        countries.map( country => {

          return (
            <div key={country.uuid}
              style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <p><strong>Nombre del pais:</strong> <a href={`/countries/${country.uuid}`}> {country.name}</a>, <strong>numcode:</strong>{country.numcode}</p>
            </div>
          );

        })
      }
    </div>
  );

};
