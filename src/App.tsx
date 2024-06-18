import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
React;

function App(): JSX.Element {
  const [titleMovie, setTitleMovie] = useState<string>('');

  const handleInputTitle = (): void => {
    const title: string = input.value;
    setTitleMovie(title);
  };

  return (
    <div className="page">
      <Header title={titleMovie} handleInputTitle={handleInputTitle} />
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
