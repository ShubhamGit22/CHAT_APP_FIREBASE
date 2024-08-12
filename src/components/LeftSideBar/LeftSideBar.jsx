import React from 'react';
import "./LeftSideBar.css"
import content_files from '../../content_files/content_files';

const LeftSideBar = () => {
    return (
        <div className='ls'>
            <div className="ls-top">
                <div className="ls-nav">
                    <img src={content_files.logo} className='logo' alt="" />
                    <div className="menu">
                        <img src={content_files.menu_icon} alt="" />
                        <div className="sub-menu">
                            <p>Edit profile</p>
                            <hr />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="ls-search">
                    <img src={content_files.search_icon} alt="" />
                    <input type="text" placeholder='Search here' />
                </div>
            </div>
            <div className="ls-list">
                {/* <div className="friends">
                    <img src={content_files.profile_img} alt="" />
                    <div>
                        <p>Richard Sanford</p>
                        <span>Hello, how are you?</span>
                    </div>
                </div> */}

                {Array(12).fill("").map((item, index) => (
                    <div key={index} className='friends'>
                        <img src={content_files.profile_img} alt="" />
                        <div>
                            <p>Richard Sanford</p>
                            <span>Hello, How are you</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftSideBar;
