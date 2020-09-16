import React, { Component } from 'react';

import wavingHand from './assets/waving-hand.svg';
import FAQbox from './components/faq-box';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="layout">
            <div id="upper-layout">
              <div id="upper-content">
                <span id="title">IRIS</span>
                <p id="hello-text">
                  Hello
                  <span style={{marginLeft: 19}}><img src={wavingHand} alt="waving-hand" /></span>
                </p>
                <p id="description">I am Iris, a Virtual Assistant How may I help you? </p>
              </div>
              <FAQbox />
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
