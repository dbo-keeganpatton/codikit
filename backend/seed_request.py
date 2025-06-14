from sqlalchemy import create_engine
from dotenv import load_dotenv
import pandas as pd
import requests
import psycopg2
import os


########################################
#          Database stoof              #
########################################
load_dotenv()
POSTGRES_URL = os.getenv("POSTGRES_URL")
POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DATABASE = os.getenv("POSTGRES_DATABASE")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")
connection_string = f'postgresql+psycopg2://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DATABASE}'
engine = create_engine(connection_string)
pd.set_option('display.max_columns', None)
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


########################################
#              Get it                  #
########################################
   
for i in range(1, 2376):
    
    url = f"https://gutendex.com/books/?page={i}"
    req = requests.get(url)

    if req.status_code == 200:
        response = req.json()
        
        if "results" in response:
            
            df = pd.DataFrame(response["results"])
            print(f"Processed {url} into Dataframe")
            
            # Drop bs, and coerce dtypes for Postgres
            df = df.drop(['media_type', 'id', 'translators', 'download_count', 'copyright'], axis=1)
            df['languages'] = df['languages'].apply(lambda x: str(x))
            df['title'] = df['title'].apply(lambda x: str(x))
            df['authors'] = df['authors'].apply(lambda x: str(x))
            df['summaries'] = df['summaries'].apply(lambda x: str(x))
            df['subjects'] = df['subjects'].apply(lambda x: str(x))
            df['formats'] = df['formats'].apply(lambda x: str(x))

            with engine.connect() as connection:
                df.to_sql(
                    name='story', 
                    con=connection, 
                    if_exists='append', 
                    index=False, 
                    schema='backend'  
                )
                print(f"Successfully inserted {url} into database.")
                del df

    else:
        print(f"You really suck: {req.status_code}")


print("Database seeding complete")






