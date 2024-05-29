from pydantic import BaseModel, Field

class MovieCreate(BaseModel):
    movie: int
    title: str = Field(...)
    genres: str
    year: int
    Rating: int = Field(ge=1, le=10)
    RottenTomato: int = Field(ge=1, le=100)

class Movie(MovieCreate):
    id: str
    