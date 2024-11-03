import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/fetchAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [hasError, setError] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId);
  }, []);
  const getMovieDetails = async id => {
    try {
      const data = await fetchMovieDetails(id);
      setMovie(data.data);
    } catch (err) {
      setError(true);
      err;
    }
  };

  const { title, overview, poster_path, vote_average, release_date, runtime } =
    movie;

  return (
    <Container sx={{ minHeight: '86.7vh', p: '40px' }}>
      {hasError ? (
        <Typography variant='h3' textAlign={'center'}>
          Sorry we couldn&apos;t, find more data about this movie.
        </Typography>
      ) : (
        <Grid2 container spacing={2}>
          <Grid2
            size={{ xs: 12, md: 3 }}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
              <img
                src={
                  'https://media.themoviedb.org/t/p/w220_and_h330_face' +
                  poster_path
                }
                alt={title}
                title={title}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
              }}>
              <Typography variant='h2'>{title}</Typography>
              <Typography variant='body1'>
                Details:
                <br />
                {overview || 'No details available'}
              </Typography>
              <Typography variant='body1'>
                Duration:
                <br />
                {runtime} min
              </Typography>
              <Typography variant='body1'>
                Score:
                <br />
                {vote_average}/10
              </Typography>
              <Typography variant='body1'>
                Released in:
                <br />
                {release_date}
              </Typography>
            </Box>
          </Grid2>
          <Grid2>
            <Stack spacing={2} direction={'row'}>
              <Link to={'credits'}>
                <Button type='button' variant='outlined'>
                  Credits
                </Button>
              </Link>
              <Link to={'reviews'}>
                <Button type='button' variant='outlined'>
                  Reviews
                </Button>
              </Link>
            </Stack>
          </Grid2>
          <Grid2 size={12}>
            <Outlet />
          </Grid2>
        </Grid2>
      )}
    </Container>
  );
};
export default MovieDetails;
