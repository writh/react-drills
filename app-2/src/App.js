import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { dogs: ['westie', 'wolfhound', 'bichon'] }
  }
  render() {
    let showDogs = this.state.dogs.map( (element, index) => {
      return (
        <h2 key ={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
      <h2>{ showDogs }</h2>
      </div>
    );
  }
}

export default App;
