import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask'
import List from './components/List'


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      list: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(task){
    this.setState({list: [...this.state.list, task]});
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAdd} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;