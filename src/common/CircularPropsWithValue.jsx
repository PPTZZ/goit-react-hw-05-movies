import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularProgressWithLabel(props) {
	let color,
		value = Math.round(props.value);
	switch (true) {
		case value >= 70:
			color = 'success';
			break;
		case value < 70:
			color = 'warning';
			break;
		case value < 50:
			color = 'error';
			break;
		case (value = 0):
			color = 'error';
			break;
	}

	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress variant='determinate' {...props} color={`${color}`} aria-label='Rating'/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant='caption'
					component='div'
					sx={{ color: 'white', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}
				>
					{`${Math.round(props.value)}`}
				</Typography>
			</Box>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
};
