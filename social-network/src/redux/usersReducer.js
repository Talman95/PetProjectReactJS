const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    followingInProgress: []
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
                ...state, users: [...action.users]
            }
        case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;

export const toggleFollowAction = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAction = (users) => ({ type: SET_USERS, users });
export const toggleIsFollowingAction = (userId, isFetching) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId });