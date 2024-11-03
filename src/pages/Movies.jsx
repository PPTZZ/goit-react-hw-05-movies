import { useEffect, useRef, useState } from 'react';
import { fetchSearch } from '../services/fetchAPI';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Searchbar from '../common/Searchbar';
import MovieCard from '../common/MovieCard';

const Movies = () => {
  const fisrtLoad = useRef(false);
  const [movieList, setMovieList] = useState([]);
  const [page] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    if (fisrtLoad.current) {
      handleData();
    }
    fisrtLoad.current = true;
  }, [searchInput, page]);

  const handleData = async () => {
    try {
      const data = await fetchSearch(searchInput, page);
      setMovieList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ height: '86.7vh'}}>
      <Searchbar onSearchInput={setSearchInput} />
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          gap: '30px',
          width: '100%',
          pt:'40px',
          pb:'90px'
        }}>
        {movieList.length > 0 &&
          movieList.map(movie => {
            const { id, title, poster_path, vote_average } = movie;
            return (
              <Link to={`${id}`} key={id}>
              <MovieCard
                src={poster_path}
                key={id}
                title={title}
                rating={vote_average}
              />
              </Link>
            );
          })}
      </Box>
    </Container>
  );
};
export default Movies;
