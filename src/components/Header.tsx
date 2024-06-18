import React from 'react';

React;

type HeaderProps = { query: string; onInputQuery: () => void };

function Header({ query, onInputQuery }: HeaderProps): JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    onInputQuery(value);
  };

  return (
    <header>
      <h1 className="title">Busca tu película</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query} //pasamos el estado para hacer un formulario controlado
          id="movie"
          type="text"
          placeholder="Oppenheimer, Dune..."
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}

export default Header;
