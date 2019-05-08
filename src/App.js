import React from 'react';
import './App.css';
import {MoviesContainer} from './containers/Movies'

function App() {
  return (
    <div className="App">
      <MoviesContainer title='Próximamente' category='upcoming'/>
      <MoviesContainer title='Las más populares' category='popular'/>
      <MoviesContainer title='Las más valoradas' category='top_rated'/>
    </div>
  );
}

export default App;
