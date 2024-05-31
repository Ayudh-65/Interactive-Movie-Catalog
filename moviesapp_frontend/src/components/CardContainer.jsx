/* eslint-disable react/prop-types */
import MovieCard from "./CardComponent";

export default function CardContainer({ movies, handleMovieUpdate, handleMovieDelete }) {
  return (
    <>
      <div className="card-container">
        {movies.map((movie) => (<MovieCard movie={movie} key={movie.movie} handleMovieUpdate={handleMovieUpdate} handleMovieDelete={handleMovieDelete} />))}
      </div>
    </>
  );
}
