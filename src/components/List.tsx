import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
}

function List({ movies }: ListProps): JSX.Element {
  return (
    <>
      {/* renderizado condicional */}
      {movies && (
        <ul className="list">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
