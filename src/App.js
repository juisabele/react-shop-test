import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    callApiOrgs(){
    fetch('https://api.github.com/orgs/github')
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
    })
  }
  callApiMembers(){
    fetch('https://api.github.com/orgs/github/members')
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.callApiOrgs()}>
        Click here to call Org API
      </button>
      <button onClick={() => this.callApiMembers()}>
        Click here to call Org API
      </button>
      </div>
    );
  }
}

export default App;
