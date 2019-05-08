import {API_BASE_PATH, API_KEY} from '../config'

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST'
export const FETCH_MOVIES_REQUEST_ERROR = 'FETCH_MOVIES_REQUEST_ERROR'
export const FETCH_MOVIES_REQUEST_SUCCESS = 'FETCH_MOVIES_REQUEST_SUCCESS'

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

export function fetchMovies({category}) {
  return function(dispatch) {
    dispatch(requestMovies({category}))

    const request = fetch(`${API_BASE_PATH}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1/`)

    return request
      .then(resp => resp.json())
      .then(resp => dispatch(requestMoviesSuccess(resp.results)))
  }
}