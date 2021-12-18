import userLogo from './../../../assets/images/user.png';
import classes from './ProfileInfo.module.css';
import MyButton from '../../UI/button/MyButton';
import { useDispatch } from 'react-redux';
import { addPostAction, updatePostTextAction } from '../../../redux/profileReducer';
import Loader from '../../UI/loader/Loader';
import vkLogo from './../../../assets/images/vkLogo.png';

const ProfileInfo = (props) => {
    const dispatch = useDispatch();

    const addPost = () => {
        dispatch(addPostAction());
    }
    const onChangePost = (e) => {
        let newBody = e.target.value;
        dispatch(updatePostTextAction(newBody));
    }

    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={classes.write_post_container}>
            <div className={classes.user_profile}>
                {props.profile.photos.small ? <img src={props.profile.photos.small} /> : <img src={userLogo} alt="" />}
                <div>
                    <p>{props.profile.fullName}</p>
                    <small>{props.profile.aboutMe}</small>
                </div>
            </div>
            <div className={classes.post_input_container}>
                <textarea rows="3" placeholder="How you doin?"
                    value={props.newPostText} onChange={(e) => onChangePost(e)}></textarea>
                <div className={classes.add_post_links}>
                    <a href="" title={props.profile.contacts.vk}><img src={vkLogo} />VK</a>
                    <div className={classes.add_post_button}>
                        <MyButton onClick={() => addPost()}>Add a post</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;