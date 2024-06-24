interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type SearchMovies = Movie[] | undefined;

type ApiResponse = {
  Search?: Movie[];
  Error?: string;
};
