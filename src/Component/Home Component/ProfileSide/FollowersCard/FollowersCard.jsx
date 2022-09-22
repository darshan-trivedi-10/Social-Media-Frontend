import React, { useEffect } from 'react'
import './FollowersCard.css'
import { useSelector } from 'react-redux';
import User from './user/User';
import { useState } from 'react';
import { getAllUser } from '../../../../Api/userRequest';
import { Link } from 'react-router-dom';
import FollowersModel from './followersModel/FollowersModel';


const FollowersCard = ({ tag }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [reletedUser, setReletedUser] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);


    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser(user._id);
            tag === false ? setReletedUser(data) : setReletedUser(data.slice(0, 4));
        }
        fetchPersons();
    }, [modalOpened])

    return (
        <div className='FollowerCard'>
            <h2>People you may know</h2>
            {
                reletedUser.map((users, id) => {
                    if (users._id !== user._id && !user.following.includes(users._id)) {
                        return (
                            <User userData={users} key={id} />
                        )
                    }
                })
            }
            {
                tag === undefined &&
                <div>
                    <h2>
                        <center>
                            <Link style={{ textDecoration: "none" }} onClick={() => setModalOpened(true)}>
                                Find More People
                            </Link>
                        </center>
                    </h2>
                </div>
            }
            {
                modalOpened && <FollowersModel modalOpened={modalOpened} setModalOpened={setModalOpened} />
            }
        </div>

    )
}

export default FollowersCard;
