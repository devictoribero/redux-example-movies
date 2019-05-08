import React from 'react';
import './App.css';
import {MoviesContainer} from './containers/Movies'

function App() {
  return (
    <div className="App">
      <MoviesContainer title='Las más populares' category='popular'/>
    </div>
  );
}

export default App;
