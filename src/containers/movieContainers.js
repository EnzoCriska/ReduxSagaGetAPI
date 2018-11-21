import { connect } from "react-redux";
import MovieComponent from '../components/movieComponent'
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
            console.log('dispatch...')
            dispatch(fetchMovieAction(sort));
        },

        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        },
    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;