import { useState } from "react";
import axios from 'axios';

const fetchDetailData = (id) => {
    
    const [movieData, setMovieData] = useState();
    const [actorData, setActorData] = useState([]);

    const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQxNDVlZWE2YmRjOWRiMzA1NmM5ZDI5NTM3OGFjNSIsInN1YiI6IjY1MTFmOTYzOGUyYmE2MDBhZWNiYmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSQkdLznRzt--0EgZHjU8OFBtwoTUsf9_2di0apOp0Q'
    }
    };

    const castingOptions = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQxNDVlZWE2YmRjOWRiMzA1NmM5ZDI5NTM3OGFjNSIsInN1YiI6IjY1MTFmOTYzOGUyYmE2MDBhZWNiYmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSQkdLznRzt--0EgZHjU8OFBtwoTUsf9_2di0apOp0Q'
        }
    };

    axios.request(options)
        .then(function (response) {
            setMovieData(response.data)
    })
    .catch(function (error) {
        console.error(error);
        alert('Error in Movie Detail')
    });

    axios.request(options)
    .then(function (response) {
        const casting = response.data.cast;

        for (const cast of casting) {
            setActorData(prevData => [...prevData, cast]);
        }
})
.catch(function (error) {
    console.error(error);
    alert('Error in Casting')
});

    return { movieData, actorData };

    
}

export default fetchDetailData;