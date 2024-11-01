import { useEffect, useState } from 'react';
import MovieCard from '../common/MovieCard';
import { fetchTrending } from '../services/fetchAPI';
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		fetchTrending().then((data) => setMovieList(data.results));
	}, []);
	console.log(movieList);
	
	return (
		<Container
			sx={{
				display: 'flex',
				flexFlow: 'row wrap',
				justifyContent: 'center',
				gap: '30px',
				p: '5px',
				width: '100%',
			}}
		>
			<Typography variant='h3'>See what&apos;s trending this week</Typography>
			<Box
				sx={{
					display: 'flex',
					flexFlow: 'row wrap',
					justifyContent: 'center',
					gap: '30px',
					p: '5px',
					width: '100%',
				}}
			>
				{movieList.map((movie) => {
					const { title, poster_path, id, name, vote_average
					} = movie;
					return <MovieCard src={poster_path} title={title || name} key={id} rating={vote_average}/>;
				})}
			</Box>
		</Container>
	);
};
export default Home;
