import React from 'react';

React;

type HeaderProps = {
  movies: SearchMovies;
  query: string;
  error: string | null;
  onInputQuery: (value: string) => void;
  onError: (error: string | null) => void;
};

function Header({
  movies,
  query,
  error,
  onInputQuery,
  onError,
}: HeaderProps): JSX.Element {
  //función para manejar el preventDefault del formulario y posibles errores
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (query === '') {
      onError('Es necesario introducir un título');
    }
    if (query && movies.length === 0) {
      onError('No hay coincidencias');
    }
  };

  //función para tomar el valor del input y setear el estado de App
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onError(null); //quitamos cualquier mensaje de error
    const value: string = event.target.value;
    onInputQuery(value);
  };

  return (
    <header>
      <h1 className="title">Busca tu película</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className={error ? 'errorInput' : ''} //añadimos clase con renderizado condicional
          onChange={handleChange}
          value={query} //pasamos el estado para hacer un formulario controlado
          id="movie"
          type="text"
          placeholder="Oppenheimer, Dune..."
        />
      </form>
      <p className="error">{error}</p>
    </header>
  );
}

export default Header;
