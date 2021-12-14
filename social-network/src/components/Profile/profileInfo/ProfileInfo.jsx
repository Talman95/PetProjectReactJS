import userLogo from './../../../assets/images/user.png';
import classes from './ProfileInfo.module.css';
import MyButton from '../../UI/button/MyButton';
import { useDispatch } from 'react-redux';

const ProfileInfo = (props) => {
    const dispatch = useDispatch();
    const addPost = () => {
        dispatch({type: "ADD_POST"})
    }
    const onChangePost = (e) => {
        let newBody = e.target.value;
        dispatch({type: "UPDATE_POST_TEXT", newPostText: newBody});
    }

    return (
        <div className={classes.write_post_container}>
            <div className={classes.user_profile}>
                <img src={userLogo} alt="" />
                <div>
                    <p>Full Name</p>
                    <small>status</small>
                </div>
            </div>
            <div className={classes.post_input_container}>
                <textarea rows="3" placeholder="How you doin?"
                    value={props.newPostText} onChange={(e) => onChangePost(e)}></textarea>
                <div className={classes.add_post_button}>
                    <MyButton onClick={() => addPost()}>Add a post</MyButton>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;