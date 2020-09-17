import React, { Component } from 'react';

import wavingHand from './assets/waving-hand.svg';
import FAQbox from './components/faq-box';
import robot from './assets/robot.svg';

import './App.css';

class App extends Component {
  state = {
    showBot: false
  }

  botShowHandler = () => {
    this.setState({showBot:true});
  }

  render() {

    let content;
    if(this.state.showBot){
      content = (
        <React.Fragment>
          <div id="layout">
            <div id="upper-layout">
              <div id="upper-content">
                <span id="title">IRIS</span>
                <p id="hello-text">
                  Hello
                  <span id="waving-hand"><img src={wavingHand} alt="waving-hand" /></span>
                </p>
                <p id="description">I am Iris, a Virtual Assistant How may I help you? </p>
              
              </div>
              <FAQbox />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      content = (
        <React.Fragment>
          <div onClick={this.botShowHandler} id="robot-icon">
            <img style={{cursor:"pointer"}} src={robot} alt="robot" />
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

export default App;
