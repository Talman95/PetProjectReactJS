const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authProfile: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, ...action.data, isAuth: true }
        case 'SET_AUTH_PROFILE':
            return { ...state, authProfile: action.profile }
        default:
            return state;
    }
}
export default auth;

export const setUserDataAction = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const setAuthProfileAction = (profile) => ({ type: SET_AUTH_PROFILE, profile });