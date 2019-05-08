import React from 'react'
import PropTypes from 'prop-types'
import './Movies.css'
import {MoviePreview} from './MoviePreview'
import {shuffle} from '../utils/shuffle'

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


export function MoviesList({movies = [], max = movies.length}) {
  const moviesToShow = shuffle(movies).slice(0,max)
  
  return (
    <ul className='c-movies__list'>
      {moviesToShow.map(movie => <MoviePreview key={movie.id} {...movie}/>)}
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

export function MoviesListSkeleton() {
  const arr = [0,1,2,3,4,5,6]
  return (
    <div className='c-movies__list c-movies__list--skeleton'>
      {arr.map(el => <div key={el}></div>)}
    </div>
  )
}