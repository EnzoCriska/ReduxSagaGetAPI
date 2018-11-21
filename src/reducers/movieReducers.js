import { FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCESS, ADD_MOVIE } from "../actions/actionTypes";
const MovieReducer = ( movies =[], action)   => {
    switch(action.type){
        case FETCH_FAILED:
            return []
        case FETCH_SUCCESS:
            return action.receiverMovies;
        // case ADD_MOVIE:
        //     return [
        //         ...movies, action.newMovie
        //     ];
        default:
        return movies   
    }
}
export default MovieReducer;