import { createAction, handleActions } from 'redux-actions'
import getClient from '../apiClient'
const client = getClient()

// ------------------------------------
// Constants
// ------------------------------------
export const COMPLETE_INCREMENT = 'COMPLETE_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const completeIncrement = createAction(COMPLETE_INCREMENT, (value) => value)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const increment = (value) => {
  return (dispatch, getState) => {
  	client.action('reactIncrementCounter', { incrementBy : value }, function(res){
      dispatch(completeIncrement(res.result))
    });
  }
}

export const getCount = () => {
  return (dispatch, getState) => {
  	client.action('reactGetCounter', {}, function(res){
      dispatch(completeIncrement(res.result))
    });
  }
}

export const doubleAsync = () => {
  return (dispatch, getState) => {
  	var toIncrement = getState().counter
    dispatch(increment(getState().counter))
  }
}

export const actions = {
  increment,
  doubleAsync,
  getCount
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [COMPLETE_INCREMENT]: (state, { payload }) => parseInt(payload)
}, -1)
