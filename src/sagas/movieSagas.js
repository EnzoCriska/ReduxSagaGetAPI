import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./API";
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_MOVIE, ADD_MOVIE } from "../actions/actionTypes";

function* fetchMovies(){
    try {
        console.log("fetchMovies start ...")
        const receiverMovies = yield Api.getMoviesFromApi();
        // console.log(receiverMovies[0]);
        yield put({type: FETCH_SUCCESS, receiverMovies : receiverMovies});
    } catch (error) {
        yield put({type: FETCH_FAILED, error})
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIE, fetchMovies)
}

function* addNewMovie(action){
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if (result){
            yield put({type: FETCH_MOVIE, sort: 'desc'});
        }
    } catch (error) {
        
    }
}

export function* watchAddNewMovies(){
    yield takeLatest(ADD_MOVIE, addNewMovie);
};