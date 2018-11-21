import { fork} from "redux-saga/effects";
import { watchFetchMovies } from "./movieSagas";
import { watchAddNewMovies} from './movieSagas'
export default function* rootSaga(){
    yield [fork (watchFetchMovies),
            fork (watchAddNewMovies)];
};