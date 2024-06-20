import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
  onInputOrder: (orderMovies: SearchMovies) => void;
}

function List({ movies, onInputOrder }: ListProps): JSX.Element {
  const handleOrderYear = (event: React.MouseEvent<HTMLInputElement>) => {
    const inputCheckbox = event.target;
    if (inputCheckbox.checked === true) {
      console.log('checked');
      const orderMovies = movies.sort((a, b) => a.Year - b.Year);
      onInputOrder(orderMovies);
    }
  };
  return (
    <>
      <form>
        <label htmlFor="year">Ordenar por año</label>
        <input type="checkbox" onClick={handleOrderYear} />
      </form>
      <ul className="list">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default List;
