const API_KEY = "cd9cd62e65e75e9e2cd09530e7eb1f60";
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json()
  return data.results
}

export const searchMovie = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
} 