import userLogo from './../../assets/images/user.png';
import classes from './Profile.module.css';
import like from './../../assets/images/like.png';
import comments from './../../assets/images/comments.png';
import MyButton from '../UI/button/MyButton';

const Profile = (props) => {
    return (
        <div>
            <div className={classes.write_post_container}>
                <div className={classes.user_profile}>
                    <img src={userLogo} />
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
            <div className={classes.post_container}>
                <div className={classes.user_profile}>
                    <img src={userLogo} />
                    <div>
                        <p>Full Name</p>
                        <span>time</span>
                    </div>
                </div>

                <p className={classes.post_text}>Message</p>

                <div className={classes.post_row}>
                    <div className={classes.activity_icons}>
                        <div><img src={like} />2</div>
                        <div><img src={comments} />2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;