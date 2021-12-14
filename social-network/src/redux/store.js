import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profile: profileReducer
});

export const store = createStore(reducers);