import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="layout">
            <div id="upper-layout">
              <div id="upper-content">
                <span id="title">IRIS</span>
                <p id="hello-text">Hello</p>
                <p id="description">I am Iris, a Virtual Assistant How may I help you? </p>
              </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
