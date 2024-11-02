import { Toolbar, Typography } from '@mui/material';
import icon from '../assets/tmdb-logo.svg';

const Footer = () => {
	return (
		<Toolbar
			sx={{
				position: 'fixed',
				width:'100vw',
				bgcolor: '#4f4f4f',
				display: 'flex',
				justifyContent: 'center',
				gap: '30px',
			}}
		>
			<Typography variant='h6' color='white'>powered by</Typography>
			<a href='https://www.themoviedb.org' target='_blank' rel='noopener'>

			<img src={icon} width={300} />
			</a>
		</Toolbar>
	);
};
export default Footer;
