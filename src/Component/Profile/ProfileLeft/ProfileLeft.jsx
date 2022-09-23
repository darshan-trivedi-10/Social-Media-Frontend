import React from 'react'
import LogoSearch from '../../Home Component/ProfileSide/LogoSearch/LogoSearch'
import FollowersCard from '../../Home Component/ProfileSide/FollowersCard/FollowersCard'
import InfoCard from './InfoCard/InfoCard'
import RightSide from '../../Home Component/RightSide/RightSide'


const ProfileLeft = () => {
    return (
        <div className='profileSide' style={{ overflowY: "auto", margin: "0", height: "100vh" }}>
            <LogoSearch />
            <InfoCard />
            {/* <FollowersCard /> */}
            <RightSide data={'profile'} />
        </div>
    )
}

export default ProfileLeft