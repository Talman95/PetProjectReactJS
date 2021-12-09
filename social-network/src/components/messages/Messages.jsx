import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';
import userLogo from './../../assets/images/user.png';

const Messages = (props) => {
    return (
        <>
            <NavLink to={"/messages/" + 1}>
                <div className={classes.dialog}>
                    <div className={classes.dialog_container}>
                        <div className={classes.image_person}>
                            <img src={userLogo} />
                        </div>
                        <div className={classes.info_message}>
                            <p>Full name</p>
                            <small>part of last message</small>
                        </div>
                    </div>
                    <div className={classes.date_message}>data</div>
                </div>
            </NavLink>
        </>
    )
}

export default Messages;