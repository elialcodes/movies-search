import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import moviesExample from './mocks/moviesExample.json';
import errorExample from './mocks/errorExample.json';
React;

function App(): JSX.Element {
  //estados
  const [query, setQuery] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //ejemplo de datos que devolverá el fetch para ir pintando unas películas o un error
  const movies: SearchMovies = moviesExample.Search;
  const error: { Response: string; Error: string } = errorExample;

  //función para setear el estado con el valor del input
  const handleInputQuery = (query: string): void => {
    const titleMovie: string = query;
    setQuery(titleMovie);
  };

  //función para validar el formulario si se introduce una búsqueda erronea
  const handleError = (errorMessage: string | null) => {
    if (movies.length === 0) {
      console.log(error);
    }
    const newError = errorMessage;
    setErrorMessage(newError);
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
