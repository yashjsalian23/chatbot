import React from 'react';

import bullet from '../../../assets/bullet.svg';

import './Question.css';

const Question = (props) => {
    return (
        <div className="question-layout">
            <div className="question-content">
                <span className="img-bullet"><img src={bullet} alt="bullet" /></span>
                <span className="question-text">Can I redeem my FB before the original term?</span>
            </div>
        </div>
    );
};

export default Question;