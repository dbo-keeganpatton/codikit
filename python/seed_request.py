import requests

def callGutenBergApi():
    
    url = "https://gutendex.com/books"
    req = requests.get(url)

    if req.status_code == 200:
        
        print(req.status_code)
        response = req.json()
        return response

    else:
        print(f"You really suck: {req.status_code}")


if __name__ == "__main__":
    callGutenBergApi()
