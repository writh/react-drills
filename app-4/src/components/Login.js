import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }
    
  handleUserName(name) {
      this.setState({ username: name })
    }
    
  handlePassword(pass) {
      this.setState({ password: pass })
  }

  handleLogin() {
    alert(`User: ${this.state.username} \nPassword: ${this.state.password}`);
  }

    render() {
      return (
        <div className="App">
         <input onChange={ (e) => this.handleUserName( e.target.value ) } type="text"/>
         <input onChange={ (e) => this.handlePassword( e.target.value ) } type="text"/>
         <button onClick={ this.handleLogin } >Login</button>
        </div>
      );
    }
  }
  
  export default App;
  