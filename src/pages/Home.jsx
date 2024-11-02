import { useEffect, useState } from 'react';
import MovieCard from '../common/MovieCard';
import { fetchTrending } from '../services/fetchAPI';
import { Box, Container, Link, Typography } from '@mui/material';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchTrending().then(data => setMovieList(data.results));
  }, []);
  return (
    <Container
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        gap: '30px',
        width: '100%',
        height: '86.7vh',
      }}>
      <Typography variant='h3'>See what&apos;s trending this week</Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          gap: '30px',
          width: '100%',
          pt: '40px',
          pb: '90px',
        }}>
        {movieList.map(movie => {
          const { title, poster_path, id, name, vote_average } = movie;
          return (
            <Link to={`/movies/${id}`} key={id}>
              <MovieCard
                src={poster_path}
                title={title || name}
                rating={vote_average}
              />
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};
export default Home;
