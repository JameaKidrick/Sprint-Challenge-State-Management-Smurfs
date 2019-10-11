import React from 'react';

const SmurfCards = props => {
  return(
    <div>
      <h4>Name: {props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  )
}

export default SmurfCards;