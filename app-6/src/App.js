import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      list: [],
      input:''
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value){
    this.setState({ input: value })
  }

  handleAdd(e){
    e.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        this.state.input,
      ],
      input: ''
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return (
        <Todo key={index} task={element} />
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <form>
          <input value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Enter new task"/>
          <button onClick={this.handleAdd}>Add</button>
        </form>
        <br/>
        {list}
      </div>
    );
  }
}

export default App;
