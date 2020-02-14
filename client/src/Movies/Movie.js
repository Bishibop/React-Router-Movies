import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://192.168.1.170:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Why even have this function at all? Just call addToSavedList directly
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie);
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div
        onClick={() => props.addToSavedList(movie)}
        className="save-button"
        >Save
      </div>
    </div>
  );
}

export default Movie;
