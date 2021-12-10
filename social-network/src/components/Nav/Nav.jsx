import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.links}>
                <NavLink to="/" className={classes.item}>Profile</NavLink>
                <NavLink to="/messages" className={classes.item}>Messages</NavLink>
                <a href="" className={classes.item}>Users</a>
                <a href="" className={classes.item}>Settings</a>
            </div>

        </div>
    )
}

export default Nav;