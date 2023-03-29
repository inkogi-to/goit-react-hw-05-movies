import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState,useRef} from "react";
import {getMovieById} from "../service/api";
import {createImgUrl} from "../service/ImgUrl";

const MoviesDetails = () => {
  const {movieId} = useParams()
  const location =useLocation()
  const [movies, setMovies] = useState([])

  const backLinkLocationRef = useRef(location.state?.from ?? '/');


  useEffect(() => {
    const getMoviesByMovieId = async () => {
      try {
        const movie = await getMovieById(movieId)
        setMovies(movie)
      } catch (e) {
        console.log(e.message)
      }

    }
    getMoviesByMovieId()
  }, [movieId])

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <h1>{movies.original_title}</h1>
      <img src={createImgUrl(movies.poster_path)} alt=''/>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </>

  )
}
export default MoviesDetails
