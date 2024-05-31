from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import crud
from schemas import Movie, MovieCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
async def update_movie(movie_id: int, movie: Movie):
    return await crud.update_movie(movie_id, movie)

@app.delete("/movies/{movie_id}", response_description="Movie deleted successfully")
async def delete_movie(movie_id: int):
    return await crud.delete_movie(movie_id)
