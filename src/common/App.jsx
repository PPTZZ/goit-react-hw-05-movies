import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from '../pages/Home';
import Header from './Header';
import Movies from '../pages/Movies';
import Footer from './Footer';
import { Stack, Typography } from '@mui/material';
import { fetchData } from '../services/fetchAPI';

const StyledLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	&.active {
		color: orange;
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
			<Footer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} />
			</Routes>
		</>
	);
};
export default App;