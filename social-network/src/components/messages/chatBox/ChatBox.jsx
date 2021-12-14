import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
import classes from './ChatBox.module.css';
import ChatItem from './ChatItem';

const ChatBox = (props) => {
    const dispatch = useDispatch();
    const chat = useSelector(state => state.chat.chatInfo);
    const newMessageText = useSelector(state => state.chat.newMessageText);

    const sendMessage = () => {
        dispatch({type: 'SEND_MESSAGE'});
    }
    const updateMessageText = (e) => {
        dispatch({type: 'UPDATE_MESSAGE_TEXT', newText: e.target.value});
        console.log(newMessageText);
    }

    return (
        <div className={classes.chatbox}>
            <div className={classes.header}>
                <div class={classes.button_back}>
                    <NavLink to="/messages" class={classes.button_back}>
                        <img src="" alt="" />
                        Back
                    </NavLink>
                </div>
                <div class={classes.person}>
                    <span class={classes.name}>Anna Luzhina</span>
                    <span class={classes.time}>15 minutes ago...</span>
                </div>
                <a href=''>
                    <img src="" alt="" />
                </a>
            </div>

            <div className={classes.chatlogs}>
                {chat.map(item => <ChatItem item={item} />)}
            </div>

            <div className={classes.chatForm}>
                <div className={classes.textarea}>
                    <textarea rows='3' placeholder="Enter your message"
                    value={newMessageText} onChange={(e) => updateMessageText(e)}></textarea>
                </div>
                <MyButton onClick={sendMessage}>Send</MyButton>
            </div>
        </div>
    )
}

export default ChatBox;