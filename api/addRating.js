import axios from "axios";

const addRating = (id) => {

    const options = {
        method: 'POST',
        url: `https://api.themoviedb.org/3/movie/${id}/rating`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQxNDVlZWE2YmRjOWRiMzA1NmM5ZDI5NTM3OGFjNSIsInN1YiI6IjY1MTFmOTYzOGUyYmE2MDBhZWNiYmQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSQkdLznRzt--0EgZHjU8OFBtwoTUsf9_2di0apOp0Q'
        }
      };

      axios.request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

};

export default addRating;