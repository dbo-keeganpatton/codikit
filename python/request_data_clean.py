from seed_request import callGutenBergApi
import pandas as pd

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

call = callGutenBergApi()
request_array = call["results"]
df = pd.DataFrame(request_array)



