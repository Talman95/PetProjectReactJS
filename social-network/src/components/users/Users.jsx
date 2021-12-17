import classes from './Users.module.css';
import userLogo from './../../assets/images/user.png';
import MyButton from './../UI/button/MyButton';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setUsersAction, toggleFollowAction } from './../../redux/usersReducer';
import { useEffect } from 'react';
import { usersAPI } from '../../API/api';
import {useState} from 'react';
import { getPagesArray, getPagesCount } from '../../utils/pages';

const Users = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    const toggleFollow = (userId) => {
        dispatch(toggleFollowAction(userId));
    }
    let pages = getPagesArray(23);
    
    async function getUsers() {
        const response = await usersAPI.getUsers(page, pageSize);       
        dispatch(setUsersAction(response.items));
        const totalCount = response.totalCount;
        setTotalPages(getPagesCount(totalCount, pageSize));
    }
    useEffect(() => {
        getUsers();
    }, [page]);

    

    return (
        <>
        <div className={classes.container}>
            {users.map(user => <div className={classes.item} key={user.id}>
                <div className={classes.leftside}>
                    <NavLink to={'/' + user.id}>
                        {user.photos.small ? <img src={user.photos.small} /> : <img src={userLogo} alt="User photo" />}
                    </NavLink>
                    <div>
                        {user.followed
                            ? <MyButton onClick={() => toggleFollow(user.id)}>Unfollow</MyButton>
                            : <MyButton onClick={() => toggleFollow(user.id)}>Follow</MyButton>}
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
        <div className={classes.pageWrapper}>
            {pages.map(p => <span 
            key={p}
            onClick={() => setPage(p)}
            className={page === p ? classes.pageSelected : classes.page}>{p}</span>)}            
        </div>
        </>
    )
}

export default Users;