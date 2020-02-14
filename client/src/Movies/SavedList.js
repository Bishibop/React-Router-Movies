import React from 'react';
import { NavLink } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink
        to={`/movie/${movie.id}`}
        key={movie.id}
        className="saved-movie"
        activeClassName='saved-active'
      >{movie.title}</NavLink>
    ))}
    <div onClick={() => props.history.push('/')} className="home-button">Home</div>
  </div>
);

export default SavedList;
