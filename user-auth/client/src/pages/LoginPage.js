import React, { Component } from 'react';
import './LoginPage.css';
import API from '../utils/https';
import hash from 'js-sha256';

class LoginPage extends Component {
  state = {
      username: "",
      password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  hashInput = () => {
    this.setState({ password: hash.sha256(this.state.password) });
  }

  render() {
    return (
      <div>
        <form action="/login" method="post" onSubmit={this.hashInput}>
          <h3>Username:</h3>
          <input className="input" name="username" type="text" onChange={this.handleInputChange} value={this.state.username}></input>
          <h3>Password:</h3>
          <input className="input" name="password" type="password" onChange={this.handleInputChange} value={this.state.password}></input>
          <input id="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default LoginPage;
