import React from 'react';

import questionMark from '../../assets/question-mark.svg';
import Question from './question/Question';
import Button from './button/Button';
import robot from '../../assets/robot.svg';

import "./index.css";

const index = () => {

    let questions = ["Can I redeem my FB before the original term?","How do I pay my Credit card bill?","How can I get my Account Statement?","What is the tenure of Fixed Deposit?"]

    let content = questions.map(item => {
        return <React.Fragment>
            <Question content={item} />
        </React.Fragment>
    });

    return (
        <React.Fragment>

            <div id="faq-layout">
                <img id="robot" src={robot} alt="robot" />
                <div id="faq-content">
                    <p id="faq-title">
                        Frequently Asked Questions
                        <span id="question-mark"><img src={questionMark} alt="question mark" /></span>
                    </p>
                    {content}
                    <Button />
                </div>
            </div>
        </React.Fragment>
    );
};

export default index;