import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTrendingMovies} from "../service/api";


const Home = () => {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    const moviesTrending = async () => {
      try {
        const getMovies = await getTrendingMovies()
        setMovies(getMovies)
      } catch (e) {
        console.log(e.message)
      }

    }
    moviesTrending()
  }, [])
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(m => (<li key={m.id}><Link to={`movies/${m.id}`}>{m.title}</Link></li>))}
      </ul>
    </main>
  )
}
export default Home
