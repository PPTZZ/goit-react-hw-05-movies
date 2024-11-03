import { Box } from '@mui/material';
import { tailChase } from 'ldrs';

const Loader = () => {
  tailChase.register();
  return (
    <Box>
      <l-tail-chase size='40' speed='1.75' color='black'></l-tail-chase>
    </Box>
  );
};
export default Loader;
