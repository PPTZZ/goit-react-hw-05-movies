import { Toolbar, Typography } from '@mui/material';
import icon from '../assets/tmdb-logo.svg';

const Footer = () => {
	return (
		<Toolbar
			sx={{
				position: 'sticky',
				bottom: 0,
				bgcolor: '#5f6d75',
				display: 'flex',
				justifyContent: 'center',
				gap: '30px',
			}}
		>
			<Typography variant='h6' color='white'>powered by</Typography>
			<a href='https://www.themoviedb.org'>

			<img src={icon} width={300} />
			</a>
		</Toolbar>
	);
};
export default Footer;
