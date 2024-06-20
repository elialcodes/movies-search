import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
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

  //función fetch a la api
  useEffect(() => {
    //si la query es igual que la query anterior, no hace el fetch de getDataApi
    if (query === previousQuery.current) {
      return;
    }
    getDataApi(query).then((movies: SearchMovies) => {
      setMovies(movies);
    });
  }, [query]);

  //función para setear el estado con el valor del input
  const handleInputQuery = (value: string): void => {
    setQuery(value);
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
        <List movies={movies} />
      </main>
    </div>
  );
}

export default App;
