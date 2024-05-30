import { useEffect, useState } from "react";
import axios from "axios";

import CardContainer from "./components/CardContainer"
import TableContainer from "./components/TableContainer"
import ErrorPage from "./components/ErrorPage"

const API_ENDPOINT = "http://127.0.0.1:8000/movies"

export default function App() {

  const [movies, setMovies] = useState([]);

  async function getMovies() {
    await axios
      .get(API_ENDPOINT, {
        params: {
          limit: 20,
        },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.length >= 1) setMovies(response.data);
        console.log(movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovies();
  }, []);
  
  const route = window.location.pathname;

  return (
    <div className="app-container">

      {/* <button onClick={(e) => {
        e.preventDefault();
        getMovies();
      }}>Fetch</button> */}

      {/* Temporary Router */}
      {route == "/card" ? <CardContainer movies={movies} /> : (route == "/" ? <TableContainer movies = {movies} /> : <ErrorPage />)}
    </div>
  )
}