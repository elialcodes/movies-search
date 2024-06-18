import React from 'react';
React;
type HeaderProps = { title: string; handleInputTitle: void };
function Header({ title, handleInputTitle }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1 className="title">Busca tu película</h1>
      <form className="form">
        <input id="movie" type="text" placeholder="Oppenheimer, Dune..." />
        <button type="submit">Enviar</button>
      </form>
    </header>
  );
}

export default Header;
