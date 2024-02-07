export async function searchMovie(search_data) {

    try{

        console.log('search_data: ' + search_data);

        const response = await fetch('https://api.se-rmutl.net/api/movie/search?search_text='+search_data);

        return await response.json(); //***

       // console.log('Search Movie response: ' + await response);

    }catch(error) {
        return [];
    }
    
}
/*
var url = "https://yourUrl";
var bearer = 'Bearer ' + bearer_token;
fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json'
        }
    }).then(responseJson => {
        var items = JSON.parse(responseJson._bodyInit);
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));

    export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users'); 
        //const response = await fetch('/api/movie/all');
        const response = await fetch('http://api.se-rmutl.net/api/movie/all');

        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
*/

export async function getAllMovies() {
    var bearer_token = '1234567890';
    try{
        var bearer = 'Bearer ' + bearer_token;
        //const response = await fetch('http://api.se-rmutl.net/api/movie/all');

        //const response = await fetch('/api/movie/all');
        //return await response.json();

        await fetch('https://api.se-rmutl.net/api/movie/all', {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }).then(responseJson => {
            //var items = JSON.parse(responseJson._bodyInit);

            return  responseJson.json();

        })
        .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
        }));



    }catch(error) {
        return [];
    }
    
}

export async function createMovie(data) {
    const response = await fetch(`https://api.se-rmutl.net/api/movie/insert`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

      })
      console.log('Create Movie response: ' + await response);

   // return  response.json();
    return  response;
}
