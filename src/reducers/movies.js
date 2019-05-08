      
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_SUCCESS,
  FETCH_MOVIES_REQUEST_ERROR
} from '../actions'

export function movies(state = {
  isFetching: false,
  movies: []
}, action) {

  if(!action) return state;

  switch(action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        isFetching: true,
        movies: []
      }

    case FETCH_MOVIES_REQUEST_SUCCESS:
      return {
        isFetching: false,
        movies: action.payload.movies
      }

    case FETCH_MOVIES_REQUEST_ERROR:
      return {
        isFetching: false,
        error: action.error,
        movies: []
      }

    default:
      return state
  }
}