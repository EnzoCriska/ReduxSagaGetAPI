import { put, takeLatest } from "redux-saga/effects";
import { API } from "./API";
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_MOVIE } from "../actions/actionTypes";

function* fetchMovies(){
    try {
        const receiverMovies = yield API.getMoviefromAPI();
        yield put({type: FETCH_SUCCESS, receiverMovies : receiverMovies});
    } catch (error) {
        yield put({type: FETCH_FAILED, error})
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIE, fetchMovies)
}