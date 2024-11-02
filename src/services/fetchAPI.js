import axios from 'axios';

const URL_TRENDING =
  'https://api.themoviedb.org/3/trending/all/week?language=en-US';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
const OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRiM2FlNmNhNGNkNzg2OWMxNGEwN2FlZTQwNWU3MSIsIm5iZiI6MTczMDM3NDE4My44MjExMDIsInN1YiI6IjY3MjM2ODM2MWRmNzBmNzkyMGZlZjI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.34ZdKSjqKQn-OdQQMxa-tDfvAYFNRr7YlybWu3hSbBk',
  },
};

const fetchTrending = async () => {
  const response = await axios(URL_TRENDING, OPTIONS);

  return response.data;
};

const fetchSearch = async (query, page) => {
  const response = await axios(
    `${URL_SEARCH}?query=${query}&include_adult=false&language=en-US&page=${page}`,
    OPTIONS
  );
  return response.data.results;
};

export { fetchTrending, fetchSearch };
