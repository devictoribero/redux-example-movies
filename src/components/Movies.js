import React from 'react'
import PropTypes from 'prop-types'
import './Movies.css'
import {MoviePreview} from './MoviePreview'

export function MoviesLayout({title, children}) {
  return(
    <section className='c-movies'>
      <header className='c-movies__header'>
        <h1 className='c-movies__title'>{title}</h1>  
      </header>
      {children}
    </section>
  )
}
MoviesLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}


export function MoviesList({movies = []}) {
  return (
    <ul className='c-movies__list'>
      {movies.map(movie => <MoviePreview key={movie.id} {...movie}/>)}
    </ul>
  )
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired
}