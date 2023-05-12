import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce";
import {getMoviesByName} from "../service/api";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {createImgUrl} from "../utils/ImgUrl";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([])

  const location = useLocation()
  const urlQuery = searchParams.get('query') ?? ''
  const searchQuery = useDebounce(urlQuery, 500)



  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({query: e.target.value});
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getMoviesByName(searchQuery)
        setMovies(data)
      } catch (e) {
        console.log(e.message)
      }

    }
    getMovies()
  }, [searchQuery])

  return (
    <>
      <form>
        <input type="text" autoComplete='off' onChange={updateQueryString} value={urlQuery}/>
      </form>
      <ul>
        {movies.map(({id, title,poster_path}) => (
          <li key={id}><img src={createImgUrl(poster_path)} alt=""/><Link to={`/movies/${id}`} state={{from: location}}>{title}</Link></li>))}
      </ul>

    </>
  )
}
export default Movies
