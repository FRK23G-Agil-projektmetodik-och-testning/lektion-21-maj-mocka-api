function MovieCard(props) {
  const { movie, showImage, showYear } = props;

  return (
    <article>
      {showImage ? <img src={movie.Poster} /> : ''}
      <h2>{movie.Title}</h2>
      {showYear ? <h3>{movie.Year}</h3> : ''}
    </article>
  );
}

export default MovieCard;
