import React from 'react';
import InputDebounce from './InputDebounce';

React;

type HeaderProps = {
  query: string;
  error: string | null;
  onChange: (value: string) => void;
};

function Header({ query, error, onChange }: HeaderProps): JSX.Element {
  //función para manejar el preventDefault del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <header>
      <h1 className="title">Busca tu película</h1>
      <form className="form" onSubmit={handleSubmit}>
        <InputDebounce query={query} error={error} onChange={onChange} />
      </form>
      <p className="error">{error}</p>
    </header>
  );
}

export default Header;
