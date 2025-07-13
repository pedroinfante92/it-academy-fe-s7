const API_KEY = "3f49cf40e1df9d41ae58d19e9a6e9613";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies(page: number = 1) {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}

export async function fetchMovieDetails(id: string) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
}

export async function fetchCastDetails(id: string) {
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch cast details");
  return response.json();
}