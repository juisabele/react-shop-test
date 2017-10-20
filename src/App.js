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
  return fetch('https://api.github.com/orgs/github/members').then(response => {
    return response.json();
  })
  .then(function (responseJson) {
    var parsed = responseJson;

var arr = [];

for(var x in parsed){
  arr.push(parsed[x]);
}
console.log(arr, typeof arr)
    th.setState({
      isLoading: false,
      responseArr: arr
    });
  });
}

  render() {
    let jobs = this.state.responseArr;
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
          <div>
                <h1>{jobs}</h1>
              </div>
      </div>
    );
  }
}

export default App;
