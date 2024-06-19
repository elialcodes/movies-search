import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import moviesExample from './mocks/moviesExample.json';
// import errorExample from '../mocks/errorExample.json';
React;

function App(): JSX.Element {
  //estados
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  //ejemplo de datos que devolverá el fetch para ir pintando algo
  const movies: SearchMovies = moviesExample.Search;

  //función para setear el estado con el valor del input
  const handleInputQuery = (query: string): void => {
    const titleMovie: string = query;
    setQuery(titleMovie);
  };

  //función para validar el formulario si se introduce una búsqueda erronea
  const handleError = (error: string | null) => {
    const newError = error;
    setError(newError);
  };

  return (
    <div className="page">
      <Header
        query={query}
        error={error}
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
