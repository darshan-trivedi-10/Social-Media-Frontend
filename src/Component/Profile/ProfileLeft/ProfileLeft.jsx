import React from 'react'
import LogoSearch from '../../Home Component/ProfileSide/LogoSearch/LogoSearch'
import FollowersCard from '../../Home Component/ProfileSide/FollowersCard/FollowersCard'
import InfoCard from './InfoCard/InfoCard'


const ProfileLeft = () => {
    return (
        <div className='profileSide'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft