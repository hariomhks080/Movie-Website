import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deletehandler=async (event)=>{
    
    const response = await fetch(`https://new-project-d0561-default-rtdb.europe-west1.firebasedatabase.app/movies/${props.id}.json`, {
      method: 'Delete',
    
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
  
    if (response.status == 200) {
     props.fetch()
    }
    
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button value={props.id} onClick={deletehandler}>Delete Movie</button>
    </li>
  );
};

export default Movie;
