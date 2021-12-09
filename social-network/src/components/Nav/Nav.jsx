import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.links}>
                <a className={classes.item}>Profile</a>
                <a className={classes.item}>Messages</a>
                <a className={classes.item}>Users</a>
                <a className={classes.item}>Settings</a>
            </div>

        </div>
    )
}

export default Nav;