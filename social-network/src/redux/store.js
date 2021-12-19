import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import auth from "./auth";

let reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    users: usersReducer,
    auth: auth
});

export const store = createStore(reducers);