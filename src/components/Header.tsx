import React from 'react';
import { useRef } from 'react';

React;

type HeaderProps = { query: string; handleInputQuery: () => void };

function Header({ query, handleInputQuery }: HeaderProps): JSX.Element {
  //1. establecemos una referencia a un elemento del DOM
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputElement = inputRef.current; //3. accedemos al elemento del DOM asi
    const inputValue = inputElement.value; //4. accedemos a su value
    console.log(inputValue);
    handleInputQuery();
  };
  // const handleChange = (event) => {
  //   handleInputQuery(event.target.value);
  // };

  return (
    <header>
      <h1 className="title">Busca tu película</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={inputRef} //2. relacionamos la referencia a este elemento del DOM
          // onChange={handleChange}
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
