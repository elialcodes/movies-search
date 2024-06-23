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
  const [movies, setMovies] = useState<SearchMovies>(undefined);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //ejemplo de datos que devolverá el fetch para ir pintando unas películas o un error
  //sin tener una llamda a la api:
  //const movies: SearchMovies = moviesExample.Search;
  //const error: { Response: string; Error: string } = errorExample;

  //función para devolver un mensaje si se introduce una búsqueda erronea
  const handleError = (movies: SearchMovies, query: string) => {
    if (query === '') {
      setErrorMessage('');
    }
    if (movies === undefined && query) {
      setErrorMessage('No hay coincidencias');
    } else {
      setErrorMessage('');
    }
  };

  //useEffect con fetch a la api
  useEffect(() => {
    if (query) {
      setLoading(true);
      getDataApi(query).then((movies: SearchMovies) => {
        setLoading(false);
        setMovies(movies);
        handleError(movies, query);
        //debouncedSetMovies(movies);
      });
    }
  }, [query]);

  //función para setear el estado con el valor del input
  const handleInputQuery = (value: string): void => {
    setQuery(value);
  };

  //función para ordenar las películas por año
  const handleOrderMovies = (orderMovies: SearchMovies) => {
    setMovies(orderMovies);
  };

  return (
    <div className="page">
      <Header query={query} error={errorMessage} onChange={handleInputQuery} />
      <main className="main">
        <List
          movies={movies}
          loading={loading}
          onInputOrder={handleOrderMovies}
        />
      </main>
    </div>
  );
}

export default App;
