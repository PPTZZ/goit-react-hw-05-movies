import { Routes, Route, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from '../pages/Home';
import Header from './Header';
import Movies from '../pages/Movies';
import Footer from './Footer';
import { Stack, Typography } from '@mui/material';
import MovieDetails from '../pages/MovieDetails';
import NotFound from '../pages/NotFound';
import Credits from './Credits';
import Reviews from './Reviews';


const StyledLink = styled(NavLink)`
  color: #d9d9d9;
  text-decoration: none;
  &.active {
    color: #45c0c4;
  }
`;

const App = () => {
  return (
    <>
      <Header>
        <Stack direction={'row'} spacing={2}>
          <StyledLink to={'/goit-react-hw-05-movies'}>
            <Typography variant='h5'>Home</Typography>
          </StyledLink>
          <StyledLink to={'/movies'}>
            <Typography variant='h5'>Movies</Typography>
          </StyledLink>
        </Stack>
      </Header>
      <Routes>
        <Route path='/goit-react-hw-05-movies' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='credits' element={<Credits/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
