import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer
});

export const store = createStore(reducers);