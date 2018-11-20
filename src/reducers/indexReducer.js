import { combineReducers } from "redux";
import MovieReducer from "./movieReducers";
const allReducer = combineReducers({
    MovieReducer,
})
export default allReducer;