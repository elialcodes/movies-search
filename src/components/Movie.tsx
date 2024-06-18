import React from 'react';
React;
interface MovieProps {
  movie: Movie;
}

function Movie({ movie }: MovieProps) {
  return (
    <li>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </li>
  );
}

export default Movie;
