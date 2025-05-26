from seed_request import callGutenBergApi
from sqlalchemy import create_engine
from dotenv import load_dotenv
import pandas as pd
import psycopg2
pd.set_option('display.max_columns', None)
import os

"""
The structure of the GutenDex API response is the following;
{
    ...,
    ...,
    results [     <-- This is our array of book info
        {book1},  <-- Each entry is a Dict
        {book2},
        ...,
    ]
}
"""


load_dotenv()
POSTGRES_URL = os.getenv("POSTGRES_URL")
POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DATABASE = os.getenv("POSTGRES_DATABASE")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")
engine = create_engine(f'postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DATABASE}')


call = callGutenBergApi()
request_array = call["results"]
df = pd.DataFrame(request_array)


drop_cols_df = df.drop(['media_type', 'formats', 'id', 'translators', 'download_count', 'copyright'], axis=1)


with engine.connect() as conn:

    drop_cols_df.to_sql("codikit.backend.story", con=conn, if_exists='replace', index=False)





