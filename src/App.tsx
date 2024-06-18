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

  const handleInputQuery = (event): void => {
    setQuery(event.target.value);
  };

  return (
    <div className="page">
      <Header query={query} handleInputQuery={handleInputQuery} />
      <main>
        <List movies={movies} />
      </main>
    </div>
  );
}

export default App;
