import {movies} from './movies'
import {
  requestMovies,
  requestMoviesSuccess,
  requestMoviesError,
  fetchMovies
} from '../actions'

describe('Movies -- reducers', () => {
  it('Receives initialState', () => {
    expect(movies(undefined)).toEqual({movies: [], isFetching: false})
  })

  it('Handles the init of the Request', () => {
    const stateAfterDispatch = {isFetching: true, movies: []}
    expect(movies(undefined, requestMovies())).toEqual(stateAfterDispatch)
  })

  
})