import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
  onInputOrder: (orderMovies: SearchMovies) => void;
}

function List({ movies, onInputOrder }: ListProps): JSX.Element {
  const handleOrderYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCheckbox = event.target;
    if (inputCheckbox.checked) {
      console.log('checked');
      const orderMovies = [...movies].sort((a, b) => a.Year - b.Year);
      onInputOrder(orderMovies);
    } else {
      onInputOrder(movies);
    }
  };
  return (
    <>
      {movies.length !== 0 && (
        <>
          <form>
            <label htmlFor="year">Ordenar por año</label>
            <input type="checkbox" onChange={handleOrderYear} />
          </form>
          <ul className="list">
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default List;
