const urlGetMovies = 'http://localhost:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    console.log(response.status)
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []       
    return movies;
}
export const Api = {
    getMoviesFromApi
};