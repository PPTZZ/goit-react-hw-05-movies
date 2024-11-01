import PropTypes from 'prop-types';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularPropsWithValue';

const MovieCard = ({ src, title, rating }) => {
	return (
		<Card sx={{ width: 200 }}>
			<CardMedia
				component='img'
				image={`https://media.themoviedb.org/t/p/w220_and_h330_face${src}`}
				alt='green iguana'
			/>
			<CardContent sx={{position:'relative'}}>
				<Box title={'Rating'} sx={{position:'absolute', top:'-30px', left:'-5px'}}>
					{rating > 0 && <CircularProgressWithLabel value={rating * 10} />}
				</Box>
				<Typography sx={{fontWeight:'bolder'}}>{title}</Typography>
			</CardContent>
		</Card>
	);
};

MovieCard.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
	rating: PropTypes.number,
};
export default MovieCard;
