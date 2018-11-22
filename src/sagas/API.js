const urlGetMovies = 'http://www.mocky.io/v2/5bf6034630000031407bc07e';
const urlPostMovies = 'http://www.mocky.io/v2/5bf6034630000031407bc07e';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    console.log(response.status);
    
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : [];

    return movies;
}


function* insertNewMovieFromApi(newMovie){
    console.log('add...')
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear
        }),
    });
    console.log(response.status);
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
};