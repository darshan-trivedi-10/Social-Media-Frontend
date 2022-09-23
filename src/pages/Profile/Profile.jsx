import React from 'react'
import ProfileLeft from '../../Component/Profile/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Component/Home Component/ProfileSide/ProfileCard/Profilecard'
import PostSide from '../../Component/Home Component/PostSide/PostSide'
import RightSide from '../../Component/Home Component/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
    return (
        <div className='Profile'>
            <div>
                <ProfileLeft />
            </div>
            <div className='Profile-center'>
                <ProfileCard location='profilePage' />
                <PostSide />
            </div>
            {/* <RightSide /> */}
        </div>

    )
}

export default Profile