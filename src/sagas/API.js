const urlGetMovie = 'http://localhost:3000/movies';
function* getMoviefromAPI(){
    const response = yield fetch(urlGetMovie, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Conten-Type': 'application/json',
        },
        body:'',
    });
    const movies = yield response.status === 200 ? JSON.parse(response.bodyInit): []
    return movies;
}

export const API = {
    getMoviefromAPI, 
}