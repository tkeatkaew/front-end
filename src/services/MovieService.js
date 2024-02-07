export async function searchMovie(search_data) {

    try {

        console.log('search_data: ' + search_data);

        const response = await fetch('https://api.se-rmutl.net/api/movie/search?search_text=' + search_data);

        return await response.json(); //***

        // console.log('Search Movie response: ' + await response);

    } catch (error) {
        return [];
    }

}

export async function getAllMovies() {
    var bearer_token = '1234567890';
    
    try {

        //const response = await fetch('http://localhost:4000/api/movie/all',
        const response = await fetch('https://api.se-rmutl.net/api/movie/all',
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${bearer_token}`,
                }
            },);
        return await response.json();



    } catch (error) {
        return [];
    }

}

export async function createMovie(data) {
    const response = await fetch(`https://api.se-rmutl.net/api/movie/insert`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    })
    console.log('Create Movie response: ' + await response);

    // return  response.json();
    return response;
}
