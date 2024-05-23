import { Outlet, useLocation, useParams } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';
import { getMovieById } from '../service/api';
import { createImgUrl } from '../utils/ImgUrl';
import { getGenres } from '../utils/getGenres';
import { getDate } from '../utils/getDataRelease';

import CardMovie from '../components/CardMovie/CardMovie';
import { Container } from '../components/Layout/Layout.styled';
import { Suspense } from 'react';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { original_title, poster_path, overview, genres, release_date } =
    movies;
  console.log(movies);
  useEffect(() => {
    const getMoviesByMovieId = async () => {
      try {
        const movie = await getMovieById(movieId);
        setMovies(movie);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMoviesByMovieId();
  }, [movieId]);

  return (
    <Container>
      <CardMovie
        refLocation={backLinkLocationRef.current}
        filmTitle={original_title}
        posterImg={createImgUrl(poster_path)}
        description={overview}
        genres={getGenres(genres)}
        dateRelease={getDate(release_date)}
      />

      <Suspense fallback={'Loading....'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MoviesDetails;
