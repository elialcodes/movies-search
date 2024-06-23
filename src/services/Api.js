const API_KEY = '56aa5655';

function getDataApi(query) {
  if (query === '') {
    return null; // no haríamos el fetch
  } else {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const moviesData = data.Search;
        if (moviesData === undefined) {
          console.log('error');
        } else {
          return moviesData;
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }
}

export default getDataApi;
