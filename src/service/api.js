import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const KEY = "b972cd435eef10c3549386c0239d193f"

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/week?api_key=${KEY}&language=en-US&include_adult=false`)
  return response.data.results
}

export const getMoviesByName = async (name) => {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${name}&page=1&language=en-US&include_adult=false`)
  return response.data.results
}
export const getMovieById = async (id) => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&page=1&language=en-US&include_adult=false`)
  return response.data
}
export const getMovieCredits = async (id) => {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}&page=1&language=en-US&include_adult=false`)
  return response.data.cast
}
export const getMovieReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}&page=1&language=en-US&include_adult=false`)
  return response.data
}

