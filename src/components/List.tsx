import React from 'react';
import moviesExample from '../mocks/moviesExample.json';
// import Error from '../mocks/errorExample.json';
React;

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type SearchMovies = Movie[];

function List(): JSX.Element {
  const movies: SearchMovies = moviesExample.Search;

  return (
    <div>
      <h2>Listado</h2>
      {movies ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default List;
