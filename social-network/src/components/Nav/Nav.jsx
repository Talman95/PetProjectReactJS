import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.links}>
                <NavLink to="/" className={classes.item}>Profile</NavLink>
                <NavLink to="/messages" className={classes.item}>Messages</NavLink>
                <NavLink to="/users" className={classes.item}>Users</NavLink>
                <a href="" className={classes.item}>Settings</a>
            </div>

        </div>
    )
}

export default Nav;