import { AppBar, Toolbar } from '@mui/material';

const Header = ({ children }) => {
	return (
		<AppBar position='static'>
			<Toolbar>{children}</Toolbar>
		</AppBar>
	);
};
export default Header;
