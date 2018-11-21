const urlGetMovies = 'http://localhost:3000/movies';
const urlPostMovies = 'http://localhost:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    console.log(response);
    
    if (response.status === 200){
        const movies = yield JSON.parse(response._bodyInit);
        console.log(movies);
        return movies;
    }else return [];
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