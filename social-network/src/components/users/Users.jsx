import classes from './Users.module.css';
import userLogo from './../../assets/images/user.png';
import MyButton from './../UI/button/MyButton';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setUsersAction, toggleFollowAction, toggleIsFollowingAction } from './../../redux/usersReducer';
import { useEffect } from 'react';
import { usersAPI } from '../../API/api';
import { useState } from 'react';
import { getPagesCount } from '../../utils/pages';
import Paginator from '../../utils/pages';
import Loader from '../UI/loader/Loader';

const Users = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    const [isUsersLoading, setIsUsersLoading] = useState(false);
    const followingInProgress = useSelector(state => state.users.followingInProgress);
    const toggleFollow = (userId) => {
        dispatch(toggleFollowAction(userId));
    }

    async function getUsers() {
        setIsUsersLoading(true);
        const response = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsersAction(response.items));
        let totalCount = response.totalCount;
        setTotalPages(getPagesCount(totalCount, pageSize));
        setIsUsersLoading(false);
    }
    useEffect(() => {
        getUsers();
    }, [page, users.followed]);



    return (
        <>
            <div className={classes.container}>
                {isUsersLoading
                    ?
                    <div className={classes.loader}><Loader /></div>
                    :
                    users.map(user => <div className={classes.item} key={user.id}>
                        <div className={classes.leftside}>
                            <NavLink to={'/' + user.id}>
                                {user.photos.small ? <img src={user.photos.small} /> : <img src={userLogo} alt="User photo" />}
                            </NavLink>
                            <div>
                                {user.followed
                                    ? <MyButton disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={async () => {
                                            dispatch(toggleIsFollowingAction(user.id, false));
                                            console.log(followingInProgress);
                                            let response = await usersAPI.unfollow(user.id);
                                            if (response.resultCode === 0) {
                                                toggleFollow(user.id);
                                            }
                                            dispatch(toggleIsFollowingAction(user.id, true));
                                            console.log(followingInProgress);
                                        }}>Unfollow</MyButton>
                                    : <MyButton disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={async () => {
                                            dispatch(toggleIsFollowingAction(user.id, false));
                                            console.log(followingInProgress);
                                            let response = await usersAPI.follow(user.id);
                                            if (response.resultCode === 0) {
                                                toggleFollow(user.id);
                                            }
                                            dispatch(toggleIsFollowingAction(user.id, true));
                                            console.log(followingInProgress);
                                        }}>Follow</MyButton>}
                            </div>
                        </div>
                        <div className={classes.rightside}>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
            <div className={classes.paginator}>
                <Paginator totalItemsCount={totalPages} pageSize={pageSize} currentPage={page} onPageChanged={setPage} portionSize={10} />
            </div>
        </>
    )
}

export default Users;