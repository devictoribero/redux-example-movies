import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchMovies} from '../actions'
import {MoviesLayout, MoviesList, MoviesListSkeleton} from '../components/Movies'

function MyComponent({title, category, movies, isFetching, loadMovies}) {
  React.useEffect(() => {
    loadMovies(category)
  }, [category, loadMovies])

  if (isFetching) {
    return(
      <MoviesLayout title={title ? title : category}>
        <MoviesListSkeleton/>
      </MoviesLayout>
    )
  }

  const noMoviesAfterFetch = (!movies || movies.length === 0) && isFetching
  if (noMoviesAfterFetch) return null;

  return (
    <MoviesLayout title={title ? title : category}>
      <MoviesList movies={movies}/>
    </MoviesLayout>
  )
}
MyComponent.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string.isRequired,
  movies: PropTypes.array,
  isFetching: PropTypes.bool,
  loadMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return ({
    movies: state.movies.movies,
    isFetching: state.movies.isFetching
  })
}
const mapDispatchToProps = dispatch => ({
  loadMovies: category => dispatch(fetchMovies({category}))
})
const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
export {MoviesContainer}