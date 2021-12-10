import { NavLink } from 'react-router-dom';
import classes from './MessagesItem.module.css';

import userLogo from './../../../assets/images/user.png';

const MessagesItem = (props) => {
    
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path}>
            <div className={classes.dialog}>
                <div className={classes.dialog_container}>
                    <div className={classes.image_person}>
                        <img src={userLogo} alt="" />
                    </div>
                    <div className={classes.info_message}>
                        <p>{props.name}</p>
                        <small>part of last message</small>
                    </div>
                </div>
                <div className={classes.date_message}>data</div>
            </div>
        </NavLink>
    )
}

export default MessagesItem;