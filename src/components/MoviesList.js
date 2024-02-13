import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
 
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
      
        <Movie
          fetch={props.fetch}
        id={movie.id}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
