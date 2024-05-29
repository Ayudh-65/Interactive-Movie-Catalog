from motor.motor_asyncio import AsyncIOMotorClient

CONN_URI = "mongodb://localhost:27017/"
DB_NAME = "movies_db"

client = AsyncIOMotorClient(CONN_URI)
db = client[DB_NAME]