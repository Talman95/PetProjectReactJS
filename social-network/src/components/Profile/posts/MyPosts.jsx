import userLogo from './../../../assets/images/user.png';
import classes from './MyPosts.module.css';
import like from './../../../assets/images/like.png';
import comments from './../../../assets/images/comments.png';

const MyPosts = (props) => {
    return (
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
    )
}

export default MyPosts;