import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/fetchAPI';
import { Stack, Typography } from '@mui/material';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    handleReviews(movieId);
  }, []);
  const handleReviews = async id => {
    try {
      const data = await fetchMovieReviews(id);
      setReviews(data.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const shortReviewList = reviews.slice(0, 10);

  return (
    <>
      {shortReviewList.map(review => {
        const { author, content, id } = review;
        return (
          <Stack spacing={2} key={id} sx={{mt:'20px'}}>
            <Stack spacing={2} direction={'row'}>
              <Typography sx={{fontWeight:'bolder'}}>Auth:</Typography>
              <Typography>{author}</Typography>
            </Stack>
            <Stack>
              <Typography sx={{fontWeight:'bolder'}}>Review:</Typography>
              <Typography>&quot;{content} &quot;</Typography>
            </Stack>
            <hr></hr>
          </Stack>
        );
      })}
    </>
  );
};
export default Reviews;
