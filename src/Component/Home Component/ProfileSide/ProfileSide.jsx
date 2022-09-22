import React from 'react'
import FollowersCard from './FollowersCard/FollowersCard'
import LogoSearch from './LogoSearch/LogoSearch'
import Profilecard from './ProfileCard/Profilecard'

import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div className='profileSide' >
            <LogoSearch />
            <Profilecard location='homePage' />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide
