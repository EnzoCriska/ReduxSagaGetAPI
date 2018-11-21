import {ADD_MOVIE, FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCESS} from './actionTypes'

export const fetchMovieAction = (sort) =>{
    console.log('this fetch action...')
    return {
        type: FETCH_MOVIE,
        sort
    }
}
export const addMovieAction = (newMovie) =>{
    return{
        type: ADD_MOVIE,
        newMovie: newMovie
    }
}

export const fetchSuccessAction = (receiverMovie) =>{
    return{
        type: FETCH_SUCCESS,
        receiverMovie
    }
}

export const fetchFailedAction = (error) =>{
    return{
        type: FETCH_FAILED,
        error
    }
}