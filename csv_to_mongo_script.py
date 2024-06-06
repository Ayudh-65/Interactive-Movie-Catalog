import csv
from motor.motor_asyncio import AsyncIOMotorClient

CONN_URI = "mongodb://localhost:27017/"
DB_NAME = "movies_db"
COLLECTION = "movies"
CSV_PATH = "moviesDB.csv"

client = AsyncIOMotorClient(CONN_URI)
db = client[DB_NAME]
collection = db[COLLECTION]

with open(CSV_PATH, 'r') as csvfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        collection.insert_one(row)

client.close()
