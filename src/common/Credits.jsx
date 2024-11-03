import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../services/fetchAPI';
import { Box, Stack, Typography } from '@mui/material';

const Credits = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    handleCredits(movieId);
  }, []);
  const handleCredits = async id => {
    try {
      const data = await fetchMovieCredits(id);
      setCredits(data.data.cast);
    } catch (error) {
      console.error(error);
    }
  };

  const shortArray = credits.slice(0, 7);

  return (
    <>
      {shortArray.map(actor => {
        const { character, original_name, profile_path,id } = actor;
        return <Stack direction={'row'} key={id}>
          <Box>
            <img width={70}
              src={
                'https://media.themoviedb.org/t/p/w220_and_h330_face' +
                profile_path
              }
            />
          </Box>
          <Box sx={{height:'100px', display:'flex', flexDirection:'column', justifyContent:'flex-end', mx:'10px'}}>
            <Typography variant='body2'>{original_name}</Typography>
            <Typography variant='body2'>as</Typography>
            <Typography variant='body2'>{character}</Typography>
          </Box>
        </Stack>;
      })}
    </>
  );
};
export default Credits;
