import { Routes, Route, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from '../pages/Home';
import Header from './Header';
import Movies from '../pages/Movies';
import Footer from './Footer';
import { Stack, Typography } from '@mui/material';
import MovieDetails from '../pages/MovieDetails';

const StyledLink = styled(NavLink)`
	color: #d9d9d9;
	text-decoration: none;
	&.active {
		color: #45C0C4;
	}
`;

const App = () => {
	return (
		<>
			<Header>
				<Stack direction={'row'} spacing={2}>
					<StyledLink to={'/'}>
						<Typography variant='h5'>Home</Typography>
					</StyledLink>
					<StyledLink to={'/movies'}>
						<Typography variant='h5'>Movies</Typography>
					</StyledLink>
				</Stack>
			</Header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/movies/:movieId' element={<MovieDetails/>}>
					<Route path='credits'/>
					<Route path='review'/>
				</Route>
			</Routes>
			<Footer />
		</>
	);
};
export default App;
