import { useEffect, useState } from 'react';
import MovieCard from '../common/MovieCard';
import { fetchData } from '../services/fetchAPI';
import { Box, Container } from '@mui/material';

const Home = () => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		fetchData().then((data) => setMovieList(data.results));
	}, []);
	console.log(movieList);

	return (
		<Container sx={{
                display:'flex',
                flexFlow:'row wrap',
                justifyContent:'center',
                gap:'30px',
                p: '5px',
                width: '100%',
            }}>
			{movieList.map((movie) => {
				const { title, poster_path, id, name } = movie;
				return <MovieCard src={poster_path} title={title || name} key={id} />;
			})}
		</Container>
	);
};
export default Home;
