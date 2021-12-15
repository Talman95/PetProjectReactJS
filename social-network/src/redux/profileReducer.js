const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

const initialState = {
    posts: [
        { id: 2, message: "Wooooooow, cool", likeCount: 1, commentsCount: 2 },
        { id: 1, message: "It is my first app in react!", likeCount: 5, commentsCount: 0 },
        { id: 0, message: "Hello everyone!", likeCount: 2, commentsCount: 3 }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: 4, message: state.newPostText, likeCount: 0, commentsCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "UPDATE_POST_TEXT":
            return {...state, newPostText: action.newBody}
        default:
            return state;
    }
}

export default profileReducer;

export const addPostAction = () => ({type: ADD_POST});
export const updatePostTextAction = (newBody) => ({type: UPDATE_POST_TEXT, newBody});