import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_SUCCESS,
  FETCH_MOVIES_REQUEST_FAILURE,
  fetchMovies
} from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

afterEach(() => fetchMock.restore())

describe('Movies thunk -- FetchMovies', () => {
  it(`GIVEN an API response 200,
      WHEN the store is updated,
      THEN ${FETCH_MOVIES_REQUEST}, ${FETCH_MOVIES_REQUEST_SUCCESS} were dispatched`, () => {
    const store = mockStore({})
    const expectedActions = [FETCH_MOVIES_REQUEST, FETCH_MOVIES_REQUEST_SUCCESS]

    fetchMock.get('*', {response: 200})
    
    return store.dispatch(fetchMovies({category: 'whatever'})).then(() => {
      const currentActions = store.getActions().map(getActionType)
      expect(expectedActions).toEqual(currentActions)
    })
  })
})

describe('Movies thunk -- FetchMovies', () => {
  it(`GIVEN an API response 404,
      WHEN the store is updated,
      THEN ${FETCH_MOVIES_REQUEST}, ${FETCH_MOVIES_REQUEST_FAILURE} were dispatched`, () => {
    const store = mockStore({})
    const expectedActions = [FETCH_MOVIES_REQUEST, FETCH_MOVIES_REQUEST_FAILURE]

    fetchMock.get('*', {response: 404})
    
    return store.dispatch(fetchMovies({category: 'whatever'})).then(() => {
      const currentActions = store.getActions().map(getActionType)
      expect(expectedActions).toEqual(currentActions)
    })
  })
})

const getActionType = action => action.type