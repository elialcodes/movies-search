const API_KEY = import.meta.env.VITE_API_KEY;

export async function getDataApi(query: string): Promise<Movie[] | undefined> {
  if (query === '') {
    return; // no haríamos el fetch
  } else {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
      );
      const data: ApiResponse = await response.json(); //devuelve un objeto con mucha información
      const moviesData = data.Search; //nos quedamos con lo que está en .Search
      if (moviesData === undefined) {
        return;
      } else {
        return moviesData;
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      return;
    }
  }
}
