import classes from './Users.module.css';
import userLogo from './../../assets/images/user.png';
import MyButton from './../UI/button/MyButton';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleFollowAction } from './../../redux/usersReducer';

const Users = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    const toggleFollow = (userId) => {
        dispatch(toggleFollowAction(userId));
    }

    return (
        <div className={classes.container}>
            {users.map(user => <div className={classes.item} key={user.id}>
                <div className={classes.leftside}>
                    <NavLink to={'/' + user.id}>
                        <img src={userLogo} alt="User photo" />
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
    )
}

export default Users;