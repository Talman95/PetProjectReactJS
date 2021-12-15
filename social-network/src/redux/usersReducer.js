const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        { id: 1, followed: true, name: 'Dmitrii', status: 'boss' },
        { id: 2, followed: false, name: 'Sveta', status: 'qwerty' },
        { id: 3, followed: true, name: 'Anna', status: 'cool' },
        { id: 4, followed: true, name: 'Egor', status: 'back' },
        { id: 5, followed: false, name: 'Oleg', status: 'samurai' }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u;
                })
            }
        }
        case 'SET_USERS':
            return {
                ...state, users: [...state.users, ...action.newUsers]
            }
        default:
            return state;
    }
}

export default usersReducer;

export const toggleFollowAction = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAction = (newUsers) => ({ type: SET_USERS, newUsers });