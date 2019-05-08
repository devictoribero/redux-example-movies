import React from 'react';
import './App.css';
import {MoviesContainer} from './containers/Movies'

function App() {
  return (
    <div className="App">
      <MoviesContainer title='Próximamente' category='upcoming' max={6}/>
      <MoviesContainer title='Las más valoradas' category='top_rated' max={6}/>
      <MoviesContainer title='Las más populares' category='popular'/>
    </div>
  );
}

export default App;
