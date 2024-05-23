import { Suspense, useEffect, useState } from 'react';
import { getTrendingMovies } from '../service/api';
import Trending from '../components/Trending/Trending';
import { Container } from '../components/Layout/Layout.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesTrending = async () => {
      try {
        const getMovies = await getTrendingMovies();
        setMovies(getMovies);
      } catch (e) {
        console.log(e.message);
      }
    };
    moviesTrending();
  }, []);
  return (
    <Container>
      <Suspense fallback={'Loading....'}>
        <Trending movies={movies} />
      </Suspense>
    </Container>
  );
};
export default Home;
