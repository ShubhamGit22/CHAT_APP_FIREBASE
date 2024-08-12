import React from 'react';
import "./RightSideBar.css"
import content_files from '../../content_files/content_files';

const RightSideBar = () => {
    return (
        <div className='rs'>
            <div className="rs-profile">
                <img src={content_files.profile_img} alt="" />
                <h3>Richard Sanford <img src={content_files.green_dot} className='dot' alt="" /></h3>
                <p>there i am Richard Sanford using chat app</p>
            </div>
            <hr />
            <div className="rs-media">
                <p>Media</p>
                <div>
                    <img src={content_files.pic1} alt="" />
                    <img src={content_files.pic2} alt="" />
                    <img src={content_files.pic3} alt="" />
                    <img src={content_files.pic4} alt="" />
                    <img src={content_files.pic1} alt="" />
                    <img src={content_files.pic2} alt="" />
                </div>
            </div>
            <button>Logout</button>
        </div>
    );
}

export default RightSideBar;
