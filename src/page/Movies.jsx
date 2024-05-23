import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { getMoviesByName } from '../service/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { createImgUrl } from '../utils/ImgUrl';
import SearchFilms from 'components/SearchFilms/SearchFilms';
import { BiSolidMoviePlay } from 'react-icons/bi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);


  const location = useLocation();
  const urlQuery = searchParams.get('query') ?? '';
  const searchQuery = useDebounce(urlQuery, 1000);
  const updateQueryString = e => {
    e.preventDefault();
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });

  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getMoviesByName(searchQuery);
        setMovies(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <>
      <SearchFilms value={urlQuery} updateQuery={updateQueryString} />
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>{poster_path ? <img src={createImgUrl(poster_path)} alt="poster"
                                           style={{ width: '200px', height: '300px',borderRadius:'5px' }} /> : <BiSolidMoviePlay style={{
            width: '200px', height: '300px', display: 'block', fill: '#444',backgroundColor:'#fff',borderRadius:'5px'
          }} />}

            <Link to={`/movies/${id}`} state={{ from: location }} style={{
              maxWidth: '200px',
              textAlign: 'center',
              display: 'block',
              color: '#000',
              fontWeight: 'bold',
              paddingTop: '10px',
            }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
