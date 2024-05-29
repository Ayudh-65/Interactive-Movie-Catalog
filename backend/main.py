from fastapi import FastAPI

import crud
from schemas import Movie, MovieCreate
from database import db

app = FastAPI()

@app.get("/")
async def root():
    return {"Hello": "Please use the /movies endpoint for CRUD"}

@app.get("/movies", response_model=list[Movie])
async def get_movies(search_query: str|None = None, limit: int = 100):
    return await crud.get_movies(search_query, limit)

@app.get("/movies/{movie_id}", response_model=Movie)
async def get_movie_by_id(movie_id: int):
    return await crud.get_movie_by_id(movie_id)

@app.post("/movies", response_model=Movie)
async def create_movie(movie: MovieCreate):
    return await crud.create_movie(movie)

@app.put("/movies/{movie_id}", response_model=Movie, response_description=f"Movie updated successfully")
async def update_movie(movie_id: int, movie: MovieCreate):
    return await crud.update_movie(movie_id, movie)

@app.delete("/movies/{movie_id}", response_description="Movie deleted successfully")
async def delete_movie(movie_id: int):
    return await crud.delete_movie(movie_id)