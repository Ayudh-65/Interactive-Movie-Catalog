/* eslint-disable react/prop-types */
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';

function MovieTableRow({ movie, handleMovieUpdate, handleMovieDelete }) {

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
    
    return(
        <TableRow key={movie.movie}>
          <TableCell>{isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.movie} onChange={(e) => (handleInputChange(e, "movie"))} /> : movie.movie}</TableCell>  
          <TableCell>{isEditing ? <TextField variant='outlined' size="small" defaultValue={movie.title} onChange={(e) => (handleInputChange(e, "title"))} /> : movie.title}</TableCell>
          <TableCell>{isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.year} onChange={(e) => (handleInputChange(e, "year"))} /> : movie.year}</TableCell>
          <TableCell>{isEditing ? <TextField variant='outlined' size="small" defaultValue={movie.genres} onChange={(e) => (handleInputChange(e, "genres"))} /> : movie.genres} </TableCell>
          <TableCell>{isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.Rating} onChange={(e) => (handleInputChange(e, "Rating"))} /> : movie.Rating}</TableCell>
          <TableCell>{isEditing ? <TextField type="number" variant='outlined' size="small" defaultValue={movie.RottenTomato} onChange={(e) => (handleInputChange(e, "RottenTomato"))} /> : movie.RottenTomato}</TableCell>
          <TableCell>
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
          </TableCell>
        </TableRow>
    )
}

export default function MoviesTable({ movies, handleMovieUpdate, handleMovieDelete, handleMovieAdd }) {

  return (
    <TableContainer component={Paper} sx={{ width: "100%", height: "100%" }}>
        <Button variant='contained' onClick={() => {handleMovieAdd()}}>➕ Add New </Button>
      <Table sx={{marginTop: 3}} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: "8%"}}>MovieID</TableCell>
            <TableCell sx={{width: "30%"}}>Title</TableCell>
            <TableCell sx={{width: "10%"}}>Year</TableCell>
            <TableCell sx={{width: "20%"}}>Genre</TableCell>
            <TableCell sx={{width: "8%"}}>Rating</TableCell>
            <TableCell sx={{width: "8%"}}>RottenTomato</TableCell>
            <TableCell sx={{width: "11%"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {movies.map((movie) => (<MovieTableRow movie={movie} key={movie.movie} handleMovieUpdate={handleMovieUpdate} handleMovieDelete={handleMovieDelete}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}