import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MovieCard = ({ src, title, rating }) => {
	return (
		<Card sx={{width:200}}>
			<CardMedia
				component='img'
				image={`https://media.themoviedb.org/t/p/w220_and_h330_face${src}`}
				alt='green iguana'
			/>
			<CardContent>
				<Typography>{title}</Typography>
				<Typography>{rating}</Typography>
			</CardContent>
		</Card>
	);
};
export default MovieCard;
