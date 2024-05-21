import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

function DisplayMovies(props) {
  const [showImage, setShowImage] = useState(true);
  const [showYear, setShowYear] = useState(true);

  const { movies } = props;
  let movieCardComponents;

  if (movies?.Search) {
    movieCardComponents = movies.Search.map((movie) => {
      return (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          showImage={showImage}
          showYear={showYear}
        />
      );
    });
  }

  return (
    <section>
      <section>
        <input
          type='checkbox'
          id='image'
          name='image'
          value='images'
          onChange={() => {
            setShowImage(!showImage);
          }}
        />
        <label htmlFor='image'>Visa bilder</label>
        <input
          type='checkbox'
          id='year'
          name='year'
          value='year'
          onChange={() => {
            setShowYear(!showYear);
          }}
        />
        <label htmlFor='year'>Visa utgivningsår</label>
      </section>
      {movies?.Response && movies?.Response === 'False' ? (
        <h2>Inga filmer hittades!</h2>
      ) : (
        movieCardComponents
      )}
    </section>
  );
}

export default DisplayMovies;
