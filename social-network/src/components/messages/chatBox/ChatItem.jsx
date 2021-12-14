import ChatBox from "./ChatBox";
import classes from './ChatBox.module.css';

const ChatItem = (props) => {
    return (
        <div className={classes.chat}>
            <div className={classes.user_photo}>
                <img src="" alt="" />
            </div>
            <p className={classes.chat_message}>
                {props.item.message}
            </p>
        </div>
    )
}

export default ChatItem;