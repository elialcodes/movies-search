import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
//import moviesExample from './mocks/moviesExample.json';
//import errorExample from './mocks/errorExample.json';
React;

function App(): JSX.Element {
  //estados
  const [moviesAppi, setMoviesAppi] = useState<SearchMovies>([]);
  const [query, setQuery] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //ejemplo de datos que devolverá el fetch para ir pintando unas películas o un error
  //const movies: SearchMovies = moviesExample.Search;
  //const error: { Response: string; Error: string } = errorExample;

  //función fetch a la api
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=56aa5655&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMoviesAppi(data.Search);
      })
      .catch((error) => {
        console.error(console.log(error));
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
        <List movies={moviesAppi} />
      </main>
    </div>
  );
}

export default App;
