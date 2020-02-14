import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    // Added to prevent duplicates
    if (!savedList.includes(movie)) {
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <Route render={(props) => (
	<SavedList
	  {...props}
	  list={savedList}
	/>
      )} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movie/:id' render={(props) => (
	<Movie
	  {...props}
	  addToSavedList={addToSavedList}
	/>
      )} />
    </div>
  );
};

export default App;
