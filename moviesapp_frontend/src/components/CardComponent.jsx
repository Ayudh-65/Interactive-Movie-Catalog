/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function MovieCard({ movie, handleMovieUpdate, handleMovieDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    const [movieObj, setMovieObj] = useState(movie);
    const [hasChanged, setHasChanged] = useState(false);

    function handleInputChange(e, field) {
      if(movieObj[field] != e.target.value){
          const movie_updating = movieObj;
          movie_updating[field] = e.target.value;
          setMovieObj(movie_updating);
          setHasChanged(true);
      }
  }

  return (
    <Box sx={{ minWidth: 275, margin: 1.5 }}>
      <Card variant="outlined" className="movie" style={{width: 275, height: 390}}>
        <CardContent>
          <div style={{ fontSize: 13 }} color="text.secondary">
          {isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.movie} onChange={(e) => (handleInputChange(e, "movie"))} /> : movie.movie}
          </div>
          <div style={{overflow: "hidden"}}>
          {isEditing ? <TextField variant='outlined' size="small" defaultValue={movie.title} onChange={(e) => (handleInputChange(e, "title"))} /> : <b style={{fontSize: 22}}>{movie.title}</b>}
          </div>
          <div style={{ fontSize: 16, mt: 1.2 }} color="text.secondary">
          {isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.year} onChange={(e) => (handleInputChange(e, "year"))} /> : movie.year}
          </div>
          <div style={{ mb: 2.5, mt: 2 }} color="text.secondary">
          {isEditing ? <TextField variant='outlined' size="small" defaultValue={movie.genres} onChange={(e) => (handleInputChange(e, "genres"))} /> : movie.genres}
          </div>
          <div>
            <b>Rating:</b> {isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.Rating} onChange={(e) => (handleInputChange(e, "Rating"))} /> : movie.Rating}
            <br />
            <b>RottenTomato:</b> {isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.RottenTomato} onChange={(e) => (handleInputChange(e, "RottenTomato"))} /> : movie.RottenTomato}
          </div>
        </CardContent>
        <CardActions sx={{ marginLeft: 1 }}>
        <Button variant='outlined'
              onClick={() => {
                if (isEditing) {
                    setIsEditing(false);
                    console.log("clicked save");
                    if(hasChanged) {
                        console.log("saving");
                        handleMovieUpdate(movieObj);
                    }
                } else {
                  setIsEditing(true);
                  console.log("clicked edit, editing now");
                }
              }}
            >{isEditing ? "💾" : "✏️"}</Button>
            <Button variant="outlined" color="error" onClick={() => {
                handleMovieDelete(movieObj["movie"]);
            }}>❌</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
