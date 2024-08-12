import React from 'react';
import "./ChatBox.css"
import content_files from '../../content_files/content_files';


const ChatBox = () => {
    return (
        <div className='chat-box'>
            <div className="chat-user">
                <img src={content_files.profile_img} alt="" />
                <p>Richard Sanford <img src={content_files.green_dot} className='dot' alt="" /></p>
                <img src={content_files.help_icon} className='help' alt="" />
            </div>

            <div className="chat-msg">
                <div className="s-msg">
                    <p className="msg">sending Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatum.</p>
                    <div>
                        <img src={content_files.profile_img} alt="" />
                        <p>2:30</p>
                    </div>
                </div>
                <div className="s-msg">
                    <img className='msg-img' src={content_files.pic1} alt="" />
                    <div>
                    <img src={content_files.profile_img} alt="" />
                        <p>2:30</p>
                    </div>
                </div>
                <div className="r-msg">
                    <p className="msg"> receiving Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatum.</p>
                    <div>
                        <img src={content_files.profile_img} alt="" />
                        <p>2:30</p>
                    </div>
                </div>
            </div>
            
            <div className="chat-input">
                <input type="text" placeholder='Send a message' />
                <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
                <label htmlFor="image">
                    <img src={content_files.gallery_icon} alt="" />
                </label>
                <img src={content_files.send_button} alt="" />
            </div>
        </div>
    );
}

export default ChatBox;
