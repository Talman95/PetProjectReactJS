import MyPosts from './posts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const Profile = (props) => {
    const posts = useSelector(state => state.profile.posts);
    const newPostText = useSelector(state => state.profile.newPostText);


    return (
        <div>
            <ProfileInfo newPostText={newPostText}/>
            {posts.map(post =>
                <MyPosts key={post.id} id={post.id} message={post.message}
                    likeCount={post.likeCount} commentsCount={post.commentsCount} />)}
        </div>
    )
}

export default Profile;