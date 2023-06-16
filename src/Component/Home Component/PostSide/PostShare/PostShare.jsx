import React, { useState, useRef } from 'react'
import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../../../Redux/actions/uploadAction';
import Profile from '../../../../img/defaultProfile.png'


const PostShare = () => {

    const dispatch = useDispatch();
    const loding = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const { user } = useSelector((state) => state.authReducer.authData)
    const desc = useRef();
    const serverPublic = 'https://social-media-backend-2vez.onrender.com/images/'

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset = () => {
        setImage(null);
        desc.current.value = '';
    }

    const handleShare = (event) => {
        event.preventDefault();
        const newPost = {
            userId: user._id,
            description: desc.current.value,
            username: user.username
        }

        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
            dispatch(uploadPost(newPost))
            reset();
        }
    }

    return (
        <>
            <div className='postShare'>
                <img src={user?.profilePicture ? serverPublic + user.profilePicture : Profile} alt='userimage' />
                <div>
                    <input ref={desc} required type='text' placeholder="What's Happening" />
                    <div className='postOptions'>
                        <div className='option' onClick={() => imageRef.current.click()}>
                            <UilScenery />
                            Photo
                        </div>
                        <div className='option' >
                            <UilPlayCircle />
                            Video
                        </div>
                        <div className='option' >
                            <UilLocationPoint />
                            Location
                        </div>
                        <div className='option'>
                            <UilSchedule />
                            Shedule
                        </div>
                        <button className='button ps-button' onClick={handleShare} disabled={loding} >{loding ? "Uploading" : "Share"}</button>
                        <div style={{ display: 'none' }}>
                            <input type='file' name="myImage" ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>
                    {image && (
                        <div className='previewImage'>
                            <UilTimes onClick={() => setImage(null)} />
                            <img src={URL.createObjectURL(image)} alt='images' />
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default PostShare
