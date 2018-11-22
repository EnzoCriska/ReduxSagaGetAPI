import { combineReducers } from "redux";
import MoviesReducer from "./movieReducers";
const allReducer = combineReducers({
    MoviesReducer,
})
export default allReducer;