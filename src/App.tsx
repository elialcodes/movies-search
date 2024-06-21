import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import debounce from 'just-debounce-it';
import getDataApi from './services/api.js';
import Header from './components/Header';
import List from './components/List';
//import moviesExample from './mocks/moviesExample.json';
//import errorExample from './mocks/errorExample.json';
React;

function App(): JSX.Element {
  //estados
  const [movies, setMovies] = useState<SearchMovies>([]);
  const [query, setQuery] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //constante a modo de useRef para que guarde como referencia la query y
  //no nos permita hacer la misma búsqueda 2 veces seguidas
  const previousQuery = useRef<string>(query);

  //ejemplo de datos que devolverá el fetch para ir pintando unas películas o un error
  //const movies: SearchMovies = moviesExample.Search;
  //const error: { Response: string; Error: string } = errorExample;

  //con la función debouce importada de la librería "just debouced it", hacemos que
  //la función que setea el estado se ejecute a los 300 milisegundos, es como un
  //set TimeOut, así el estado no cambia con cada letra introducida en el input
  //de título y el listado de películas no se muestra con cada letra, se muestra
  //cuando el usuario ha terminado de escribir (suele ser a los 300 milisegundos)
  const debouncedSetMovies = useCallback(
    debounce((movies: SearchMovies) => {
      setMovies(movies);
    }, 300),
    [],
  );

  //función fetch a la api
  useEffect(() => {
    //si la query es igual que la query anterior, no hace el fetch de getDataApi
    if (query === previousQuery.current) {
      return;
    }

    getDataApi(query).then((movies: SearchMovies) => {
      debouncedSetMovies(movies);
    });
  }, [query]);

  //función para setear el estado con el valor del input
  const handleInputQuery = (value: string): void => {
    setQuery(value);
  };

  //función para ordenar las películas por año
  const handleOrderMovies = (orderMovies: SearchMovies) => {
    setMovies(orderMovies);
  };

  //función para devolver un mensaje si se introduce una búsqueda erronea
  const handleError = (message: string | null) => {
    setErrorMessage(message);
  };

  return (
    <div className="page">
      <Header
        query={query}
        error={errorMessage}
        onInputQuery={handleInputQuery}
        onError={handleError}
      />
      <main className="main">
        <List movies={movies} onInputOrder={handleOrderMovies} />
      </main>
    </div>
  );
}

export default App;
