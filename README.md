# Query en Mongo

* Si queremos buscar algo usamos {} y dentro ponemos por qué campos queremos buscar. `find({nombre: "javier"})` devolvería todos los usuarios que se llamen "javier".
* `find({nombre: "javier", email: "javi@hotmail.es", password: "123456"})` devolvería todos los usuarios que se llamen "javier", tengan el correro "javi@hotmail.es" y su contraseña sea "123456"
* `find({nombre: /vi/i, email: /$.es/i, password: /^123/i})` devuelve aquellos objetos que contengan "vi" en el nombre, su correo acabe en ".es" y la password empiece por "123"
* Con mongoose cuando hacemos un find podemos enviar más de un parámetro. El primero es la búsqueda y el segundo (opcional) indica si queremos mostrar o no un atributo en los objetos retornados.

```javascript
Model.find({
    nomrbe: "javier" // Busca los objetos con nombre javier
  },
  ['date','email'], // Columns to Return
  {
      skip:0, // Starting Row
      limit:10, // Ending Row
      sort:{
          date: -1 //Sort by Date Added DESC
      }
  },
  function(err,allNews){ //opcional
      socket.emit('news-load', allNews); // Do something with the array of 10 objects
})
```
