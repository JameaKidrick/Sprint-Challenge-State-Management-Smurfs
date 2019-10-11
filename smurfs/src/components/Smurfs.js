import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import SmurfCards from './SmurfCards';

const Smurfs = props => {
  const [smurf, setSmurf] = useState({name: '', age: '', height: ''});

  const handleChanges = e => {
    setSmurf({...smurf, [e.target.name]:e.target.value})
  }

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf({name: '', age: '', height: ''})
  }

  if (props.Fetching){
    return <h2>GATHERING SMURFS...</h2>
  }
  console.log(props.smurfs)
  return(
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(item => (
        <SmurfCards key={item.id} smurf={item}/>
      ))}
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='name'
        onChange={handleChanges}
        value={smurf.name}
        />
        <input 
        type='number'
        name='age'
        onChange={handleChanges}
        value={smurf.age}
        />
        <input 
        type='text'
        name='height'
        onChange={handleChanges}
        value={smurf.height}
        />
        <button type='submit'>
          Add Smurf
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(Smurfs);