import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
  onInputOrder: (orderMovies: SearchMovies) => void;
}

function List({ movies, onInputOrder }: ListProps): JSX.Element {
  const handleOrderYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputSelect = event.target.value;
    let orderedMovies: SearchMovies = [];
    if (inputSelect === 'none') {
      orderedMovies = [...movies];
    }
    if (inputSelect === 'ascendente') {
      orderedMovies = [...movies].sort(
        (a, b) => parseInt(a.Year) - parseInt(b.Year),
      );
    }
    if (inputSelect === 'descendente') {
      orderedMovies = [...movies].sort(
        (a, b) => parseInt(b.Year) - parseInt(a.Year),
      );
    }
    onInputOrder(orderedMovies);
  };

  return (
    <>
      {movies && movies.length > 0 ? (
        <>
          <form>
            <select id="year" onChange={handleOrderYear}>
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
      ) : (
        <p className="error">No hay películas disponibles</p>
      )}
    </>
  );
}

export default List;
