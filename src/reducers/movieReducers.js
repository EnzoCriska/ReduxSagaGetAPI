import { FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCESS, ADD_MOVIE } from "../actions/actionTypes";
const MoviesReducer = ( movies =[], action)   => {
    console.log(movies);

    switch(action.type){
        case FETCH_FAILED:
            return []
        case FETCH_SUCCESS:
            console.log('ok reducers')
            return action.receiverMovies;
        // case ADD_MOVIE:
        //     return [
        //         ...movies, action.newMovie
        //     ];
        default:
        return movies   
    }
}
export default MoviesReducer;