import { connect } from "react-redux";
import MovieConponent from '../components/movieComponent'
import {fetchMovieAction} from '../actions/indexAction'
import {addMovieAction} from '../actions/indexAction'

const mapStateToProps = (state) => {
    return {
        movie: state.movieReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovie: (sort) =>{
            dispatch(fetchMovieAction(sort));
        },

        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        }
    }
}

const MovieContainer = connect(mapDispatchToProps, mapStateToProps)(MovieConponent);
export default MovieContainer;