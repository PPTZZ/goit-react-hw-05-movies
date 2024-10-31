import axios from "axios";

const url = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRiM2FlNmNhNGNkNzg2OWMxNGEwN2FlZTQwNWU3MSIsIm5iZiI6MTczMDM3NDE4My44MjExMDIsInN1YiI6IjY3MjM2ODM2MWRmNzBmNzkyMGZlZjI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.34ZdKSjqKQn-OdQQMxa-tDfvAYFNRr7YlybWu3hSbBk'
  }
};

 export const fetchData = async ()=>{
    const response = await axios(url,options)
    return response.data
  }