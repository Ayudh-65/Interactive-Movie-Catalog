from fastapi import HTTPException

from database import db
from schemas import Movie, MovieCreate


# Helper function for type-casting numeric movie titles to str
def type_check_helper(movie):
    if isinstance(movie["title"], int) or isinstance(movie["title"], float): 
        movie["title"] = str(movie["title"])


async def get_movies(limit: int = 100) -> list[Movie]:
    cursor = db.movies.find()
    movies = await cursor.to_list(limit)
    result = []
    for movie in movies:
        type_check_helper(movie)
        result.append(Movie(id=str(movie["_id"]), **movie))
    return result


async def get_movie_by_id(movie_id: int) -> Movie:
    movie = await db.movies.find_one({"movie": movie_id})
    if movie:
        type_check_helper(movie)
        return Movie(id=str(movie["_id"]), **movie)
    raise HTTPException(status_code=404, detail="Movie not found")

async def create_movie(movie: MovieCreate) -> Movie:
    movie_in_db = await db.movies.insert_one(movie.model_dump())
    if movie_in_db.inserted_id:
        return Movie(id=str(movie_in_db.inserted_id), **movie.model_dump())
    raise HTTPException(status_code=400, detail="Failed to create movie")

async def update_movie(movie_id: int, movie: Movie) -> Movie:
    update_movie = await db.movies.update_one({"movie": movie_id}, {"$set": movie.model_dump()})
    if update_movie.modified_count == 1:
        updated_movie = await db.movies.find_one({"movie": movie_id})
        return Movie(id=str(updated_movie["_id"]), **updated_movie)
    raise HTTPException(status_code=404, detail="Movie not found")

async def delete_movie(movie_id: int):
    deleting_movie = await db.movies.find_one({"movie": movie_id})
    if deleting_movie:
        await db.movies.delete_one({"movie": movie_id})
        return {f"Movie with movie_id = {movie_id} deleted successfully"}
    raise HTTPException(status_code=404, detail="Movie not found")
    


