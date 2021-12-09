import { NavLink } from 'react-router-dom';
import classes from './ChatBox.module.css';

const ChatBox = (props) => {
    return (
        <div className={classes.chatbox}>
            <div className={classes.header}>
                <div class={classes.button_back}>
                    <NavLink to="/messages" class={classes.button_back}>
                        <img src="" />
                        Back
                    </NavLink>
                </div>
                <div class={classes.person}>
                    <span class={classes.name}>Anna Luzhina</span>
                    <span class={classes.time}>15 minutes ago...</span>
                </div>
                <a href=''>
                    <img src="" />
                </a>
            </div>

            <div className={classes.chatlogs}>
                <div className={classes.chat}>
                    <div className={classes.user_photo}>
                        <img src="" />
                    </div>
                    <p className={classes.chat_message}>
                        messages
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;