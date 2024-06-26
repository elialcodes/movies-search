import React from 'react';
import Movie from './Movie';

React;
interface ListProps {
  movies: SearchMovies;
  loading: boolean;
  onInputOrder: (orderMovies: Movie[]) => void;
}

function List({ movies, loading, onInputOrder }: ListProps): JSX.Element {
  //función manejadora para recoger cual es el select pulsado
  const handleOrderYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputSelect = event.target.value;
    let orderedMovies: Movie[] = [];
    if (movies !== undefined) {
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
    }
    onInputOrder(orderedMovies);
  };

  return (
    <>
      {loading && <p>Cargando...</p>}
      {movies && movies.length !== 0 && (
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
      )}
    </>
  );
}

export default List;
