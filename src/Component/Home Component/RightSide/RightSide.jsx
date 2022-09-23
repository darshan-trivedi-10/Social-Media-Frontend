import React from 'react'
import './RightSide.css'
import Home from "../../../img/home.png";
import Noti from "../../../img/noti.png";
import Comment from "../../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from './TrendCard/TrendCard';
import ShareModal from './ShareModel/ShareModel'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (

            <div className='RightSide'>
                <div className='navIcons'>
                    <Link to='../home' >
                        <img src={Home} alt='home-icon' />
                    </Link>
                    <UilSetting />
                    <img src={Noti} alt='Noti-icon' />
                    <img src={Comment} alt='Comment-icon' />
                </div>
                <TrendCard />
                <button className='button r-btn' onClick={() => setModalOpened(true)}>Share</button>
                <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
    )
}


export default RightSide