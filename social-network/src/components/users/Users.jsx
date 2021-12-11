import classes from './Users.module.css';
import userLogo from './../../assets/images/user.png';
import MyButton from './../UI/button/MyButton';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    const usersData = [
        { id: 0, name: 'Gdfgd', status: 'hgjddgd'},
        { id: 1, name: 'Gdfgd', status: 'hgjddgd'},
        { id: 2, name: 'Gdfgd', status: 'hgjddgd'},
        { id: 3, name: 'Gdfgd', status: 'hgjddgd'},
        { id: 4, name: 'Gdfgd', status: 'hgjddgd'}
    ]

    return (
        <div className={classes.container}>
            {usersData.map(user => <div className={classes.item} key={user.id}>
                <div className={classes.leftside}>
                    <NavLink to={'/' + user.id}>
                        <img src={userLogo} alt="User photo" />
                    </NavLink>
                    <div>
                        <MyButton>Follow</MyButton>
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