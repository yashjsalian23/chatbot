import React from 'react';

import chat from '../../../assets/chat.svg';

import './Button.css';

const Button = () => {
    return (
        <React.Fragment>
            <div id="faq-btn">
                <img id="chat-icon" src={chat} alt="chat" />
                <span>
                    Start a New Conversation
                </span>
            </div>
        </React.Fragment>
    );
};

export default Button;