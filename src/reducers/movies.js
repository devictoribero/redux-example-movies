      
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_SUCCESS,
  FETCH_MOVIES_REQUEST_FAILURE
} from '../actions'

export function movies(state = {
  isFetching: false,
  error: undefined,
  movies: []
}, action) {

  if(!action) return state;

  switch(action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        isFetching: true,
        error: undefined,
        movies: []
      }

    case FETCH_MOVIES_REQUEST_SUCCESS:
      return {
        isFetching: false,
        error: undefined,
        movies: action.payload.movies
      }

    case FETCH_MOVIES_REQUEST_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        movies: []
      }

    default:
      return state
  }
}