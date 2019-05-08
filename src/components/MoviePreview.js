import React from 'react'
import PropTypes from 'prop-types'
import './MoviePreview.css'

export function MoviePreview({title, overview, poster_path}) {
  const posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`

  return(
    <li className='c-movie-preview'>
      <img
        src={posterPath}
        alt={`Poster path of ${title}`}
        className='c-movie-preview__posterPath'/>
      <h1 className='c-movie-preview__title'>{title}</h1>
      <span className='c-movie-preview__details'>
        <span className='c-movie-preview__overview'>{overview}</span>
      </span>
    </li>
  )
}

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
}