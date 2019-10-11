import axios from 'axios';

// ACTION TYPES
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// ACTION CREATORS
export const getSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response=> dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))
};