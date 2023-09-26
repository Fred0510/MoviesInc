import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQxNDVlZWE2YmRjOWRiMzA1NmM5ZDI5NTM3OGFjNSIsInN1YiI6IjY1MTFmOTYzOGUyYmE2MDBhZWNiYmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSQkdLznRzt--0EgZHjU8OFBtwoTUsf9_2di0apOp0Q'
        }
      };

    const fetchData = async () => {
        
          try {

            const response = await axios.request(options);

            for (const movie of response.data.results) {
                setData(prevData => [...prevData,movie]);
     
            }
    
          } catch (error) {
            setError(error);
            alert('You have an error');
          }

    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, fetchData, error}
}


export default useFetch;