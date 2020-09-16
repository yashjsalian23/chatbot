import React from 'react';

import questionMark from '../../assets/question-mark.svg';
import Question from './question/Question';

import "./index.css";

const index = () => {
    return (
        <React.Fragment>
            <div id="faq-layout">
                <div id="faq-content">
                    <p id="faq-title">
                        Frequently Asked Questions
                        <span style={{marginLeft: 7}}><img src={questionMark} alt="question mark" /></span>
                    </p>
                    <Question />
                </div>
            </div>
        </React.Fragment>
    );
};

export default index;