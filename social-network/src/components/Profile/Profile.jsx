import MyPosts from './posts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
    const profileData = [
        { id: 2, message: "Wooooooow, cool", likeCount: 1, commentsCount: 2 },
        { id: 1, message: "It is my first app in react!", likeCount: 5, commentsCount: 0 },
        { id: 0, message: "Hello everyone!", likeCount: 2, commentsCount: 3 }
    ]

    return (
        <div>
            <ProfileInfo />
            {profileData.map(post =>
                <MyPosts key={post.id} id={post.id} message={post.message}
                    likeCount={post.likeCount} commentsCount={post.commentsCount} /> )}
        </div>
    )
}

export default Profile;