export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string;
  vote_average?: number;
}

export interface MovieCardProps {
  movie: Movie;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface CastCardProps {
  cast: Cast;
}