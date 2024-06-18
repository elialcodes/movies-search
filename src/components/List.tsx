import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
}

function List({ movies }: ListProps): JSX.Element {
  return (
    <div>
      <h2>Listado</h2>
      {/* renderizado condicional */}
      {movies ? (
        <ul>
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default List;
