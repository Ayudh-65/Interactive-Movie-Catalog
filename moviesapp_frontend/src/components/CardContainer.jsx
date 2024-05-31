/* eslint-disable react/prop-types */
import MovieCard from "./CardComponent";
import { Button } from "@mui/material";

export default function CardContainer({ movies, handleMovieUpdate, handleMovieDelete }) {
  return (
    <div>
      <Button variant='contained' sx={{marginTop: 5, marginLeft: 15}}>➕ Add New </Button>
      <div className="card-container">
        {movies.map((movie) => (<MovieCard movie={movie} key={movie.movie} handleMovieUpdate={handleMovieUpdate} handleMovieDelete={handleMovieDelete} />))}
      </div>
    </div>
  );
}
