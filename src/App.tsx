import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import moviesExample from './mocks/moviesExample.json';
// import errorExample from '../mocks/errorExample.json';
React;

function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const movies: SearchMovies = moviesExample.Search;

  const handleInputQuery = (query: string): void => {
    const titleMovie: string = query;
    setQuery(titleMovie);
  };

  return (
    <div className="page">
      <Header query={query} onInputQuery={handleInputQuery} />
      <main>
        <List movies={movies} />
      </main>
    </div>
  );
}

export default App;
