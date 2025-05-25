export default async function GET() {
    
const gutendexUrl = "https://gutendex.com/books" 

fetch(gutendexUrl)
    
    .then(response => {
        if (!response.ok) {
            throw new Error("Request Failed");
        }

        return response.json();
    })

    .then(data => {
        console.log(data);
    })
    
    .catch(error => {
        console.error("Error:", error);
    })
}





