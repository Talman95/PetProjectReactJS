import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profile: profileReducer
});

let store = createStore(reducers);