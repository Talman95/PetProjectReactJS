import MyPosts from './posts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUserProfileAction } from '../../redux/profileReducer';
import { profileAPI } from '../../API/api';

const Profile = (props) => {
    const posts = useSelector(state => state.profile.posts);
    const newPostText = useSelector(state => state.profile.newPostText);
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();

    async function getProfile() {
        const response = await profileAPI.getProfile();
        dispatch(setUserProfileAction(response));
    }

    useEffect(() => {
        getProfile();
    }, []);


    return (
        <div>
            <ProfileInfo profile={profile} newPostText={newPostText}/>
            {posts.map(post =>
                <MyPosts profile={profile} key={post.id} id={post.id} message={post.message}
                    likeCount={post.likeCount} commentsCount={post.commentsCount} />)}
        </div>
    )
}

export default Profile;