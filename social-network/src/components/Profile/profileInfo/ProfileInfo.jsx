import userLogo from './../../../assets/images/user.png';
import classes from './ProfileInfo.module.css';
import MyButton from '../../UI/button/MyButton';

const ProfileInfo = (props) => {
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
                <textarea rows="3" placeholder="How you doin?"></textarea>
                <div className={classes.add_post_button}>
                    <MyButton>Add a post</MyButton>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;