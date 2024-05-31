import { useEffect, useState } from "react";
import axios from "axios";

import CardContainer from "./components/CardContainer"
import ErrorPage from "./components/ErrorPage"
import MoviesTable from "./components/MoviesTable";

const API_ENDPOINT = "http://127.0.0.1:8000/movies/"

export default function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    await axios
      .get(API_ENDPOINT, {
        params: {
          limit: 20,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.length >= 1) setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleMovieUpdate = async (movieUpdated) => {
    await axios.put(API_ENDPOINT + movieUpdated["movie"], movieUpdated)
    .then((response) => {
      if(response.status==200){
        console.log("Update successful");
        console.log(response.data);
        getMovies();
      }
      else{
        console.log("Failed to update movie:", response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleMovieDelete = async (movieId) => {
    await axios.delete(API_ENDPOINT + movieId)
    .then((response) => {
      if(response.status==200){
        console.log("Delete successful");
        console.log(response.data);
        getMovies();
      }
      else{
        console.log("Failed to delete movie:", response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getMovies();
  }, []);
  
  const route = window.location.pathname;

  return (
    <div className="app-container">
      {route == "/card" ? <CardContainer movies = {movies} handleMovieUpdate={handleMovieUpdate} handleMovieDelete={handleMovieDelete} /> : (route == "/" ? <MoviesTable movies = {movies} handleMovieUpdate={handleMovieUpdate} handleMovieDelete={handleMovieDelete} /> : <ErrorPage />)}
    </div>
  )
}