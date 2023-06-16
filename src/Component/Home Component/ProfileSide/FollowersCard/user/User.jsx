import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../../../../img/defaultProfile.png'
import { followUser, unfollowUser } from '../../../../../Redux/actions/userAction';


const User = ({ userData }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(userData.followers.includes(user._id))

    const serverPublic = 'https://social-media-backend-2vez.onrender.com/images/';

    const handleFollow = () => {
        if (following) {
            dispatch(unfollowUser(userData._id, user))
        } else {
            dispatch(followUser(userData._id, user))
        }
        setFollowing((prev) => !prev);
    }

    return (
        <div className='follower'>
            <div>
                <img src={userData.profilePicture ? serverPublic + userData.profilePicture : Profile} alt='' className='followerImg' />
                <div className='name'>
                    <span>{userData.firstname}</span>
                    <span>{userData.username}</span>
                </div>
            </div>
            <button className={following ? 'button fc-button unfollow-btn' : "button fc-button "} onClick={handleFollow}>
                {
                    following ? "Unfollow" : "Follow"
                }
            </button>
        </div>
    )
}

export default User;