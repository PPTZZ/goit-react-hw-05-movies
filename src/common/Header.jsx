import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';

const Header = ({ children }) => {
  return (
    <AppBar position='static' sx={{ bgcolor: '#4f4f4f' }}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};
export default Header;
