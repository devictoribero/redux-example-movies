import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_SUCCESS
} from '../actions'

export function movies(state = {
  isFetching: false,
  didInvalidate: false,
  movies: []
}, action) {
  switch(action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        didInvalidate: false,
        isFetching: true,
        movies: []
      }

    case FETCH_MOVIES_REQUEST_SUCCESS:
      return {
        didInvalidate: false,
        isFetching: false,
        movies: action.payload.movies
      }

    default:
      return state
  }
}