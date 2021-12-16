import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';
import userLogo from './../../assets/images/user.png';

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar_tittle}>
                <h4>Following</h4>
                <NavLink to="/messages">
                    Hide Chat
                </NavLink>
            </div>
            
            <div className={classes.online_list}>
                <div className={classes.online}>
                    <img src={userLogo} alt="User logo" />
                </div>
                <p>Full Name</p>
            </div>
        </div>
    )
}

export default Sidebar;