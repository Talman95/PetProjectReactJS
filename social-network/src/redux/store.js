import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    users: usersReducer
});

export const store = createStore(reducers);