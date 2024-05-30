/* eslint-disable react/prop-types */
import OutlinedCard from "./CardComponent";

export default function CardContainer({ movies }) {
  return (
    <>
      <h1>Cards Page</h1>
      <div className="card-container">
        {movies.map((movie) => (<OutlinedCard movie={movie} key={movie.id} />))}
      </div>
    </>
  );
}
