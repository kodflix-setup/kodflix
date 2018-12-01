import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to Kodflix, work in progress!!!</h1>
            <h3>More content to be added soon!</h3>
            <h5>Don't miss our videos on Youtube!!!!!</h5>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
