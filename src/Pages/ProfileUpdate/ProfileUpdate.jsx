import React, { useState } from 'react';
import "./ProfileUpdate.css"
import content_files from '../../content_files/content_files';

const ProfileUpdate = () => {

    const [image, setImage] = useState(false)
    return (
        <div className='profile'>
            <div className="profile-container">
                <form>
                    <h3>Profile Details</h3>
                    <label htmlFor="avatar">
                        <input onChange={(e)=> setImage(e.target.files[0])}  type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
                        <img src={image ? URL.createObjectURL(image) : content_files.avatar_icon} alt="" />
                        upload profile image
                    </label>
                    <input type="text" placeholder='Your name' required />
                    <textarea placeholder='write profile bio' required></textarea>
                    <button type='submit'> Save </button>
                </form>
                <img className='profile-pic' src={image ? URL.createObjectURL(image) : content_files.logo_icon} alt="" />
            </div>
        </div>
    );
}

export default ProfileUpdate;
