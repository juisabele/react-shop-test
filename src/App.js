import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
      this.api = this.api.bind(this);

    }

api() {
  var th = this;
  return fetch('https://api.github.com/orgs/github/members')
  .then(function (response) {
    console.log(response)
    th.setState({
      isLoading: false,
      response: response
    });
  });
}

  render() {
    if (this.state.isLoading) {
      return (
        <div className="App">
        <button onClick={() => this.api()}>COMEÇAR</button>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Dev Marketplace</h1>
        {Object.keys(this.state.response).map(jobs =>
        <div key={jobs.id}>
              <a href={jobs.url}>
                {jobs.login}
              </a>
            </div>
      )}
      </div>
    );
  }
}

export default App;
