import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_SUCCESS
} from '../actions'

export function movies(state = {
  isFetching: true,
  movies: []
}, action) {
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

    default:
      return state
  }
}