import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const Smurfs = props => {
  useEffect(() => {
    props.getSmurfs();
  }, [])

  if (props.Fetching){
    return <h2>GATHERING SMURFS...</h2>
  }
  return(
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.name}
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
  { getSmurfs }
)(Smurfs);