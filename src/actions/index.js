import {API_BASE_PATH, API_KEY} from '../config'

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST'
export const FETCH_MOVIES_REQUEST_SUCCESS = 'FETCH_MOVIES_REQUEST_SUCCESS'
export const FETCH_MOVIES_REQUEST_FAILURE = 'FETCH_MOVIES_REQUEST_FAILURE'

function requestMovies() {
  return {
    type: FETCH_MOVIES_REQUEST,
  }
}

function requestMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_REQUEST_SUCCESS,
    payload: {movies}
  }
}

function requestMoviesError(error) {
  return {
    type: FETCH_MOVIES_REQUEST_FAILURE,
    payload: {movies:[]},
    error
  }
}

export function fetchMovies({category}) {
  return function(dispatch) {
    dispatch(requestMovies({category}))

    const request = fetch(`${API_BASE_PATH}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1/`)

    return request
      .then(response => response.json())
      .then(response => dispatch(requestMoviesSuccess(response.results)))
      .catch(err => dispatch(requestMoviesError(err)))
  }
}