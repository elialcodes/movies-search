import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
  onInputOrder: (orderMovies: SearchMovies) => void;
}

function List({ movies, onInputOrder }: ListProps): JSX.Element {
  const handleOrderYear = (
    event: React.SelectHTMLAttributes<HTMLSelectElement>,
  ) => {
    const inputSelect = event.target.value;
    if (inputSelect === 'ascendente') {
      console.log('ascendente');
      const orderMovies = [...movies].sort((a, b) => a.Year - b.Year);
      onInputOrder(orderMovies);
    } else {
      console.log('descendente');
      const orderMovies = [...movies].sort((a, b) => b.Year - a.Year);
      onInputOrder(orderMovies);
    }
  };

  return (
    <>
      {movies.length !== 0 && (
        <>
          <form>
            <select id="year" type="text" onChange={handleOrderYear}>
              <option value="none">Ordenar por año</option>
              <option value="ascendente">ascendente</option>
              <option value="descendente">descendente</option>
            </select>
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
