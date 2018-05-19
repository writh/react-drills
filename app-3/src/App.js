import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = { 
      filterString: "",
      dogs: ['Westie', 'wolfhound', 'bichon'] 
    }
   this.handleChange=this.handleChange.bind(this) 
  }

  handleChange( filter ) {
    this.setState({ filterString: filter })
  }

  render() {
    let showDogs = this.state.dogs.filter((element, index, orgArr)=>{
      return element.toLowerCase().includes(`${this.state.filterString.toLowerCase()}`)
    }).map((element, index)=>{
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
      <input type="text" value={this.state.filterString} onChange={ (e) => this.handleChange( e.target.value ) }/>
      {showDogs}
      </div>
    );
  }
}

export default App;
