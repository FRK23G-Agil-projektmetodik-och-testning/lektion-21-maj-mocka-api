import './App.css';
import { useState } from 'react';

import SearchMovie from './components/SearchMovie/SearchMovie';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main>
      <SearchMovie setMovies={ setMovies } />
      <DisplayMovies movies={ movies } />
    </main>
  )
}

export default App;
