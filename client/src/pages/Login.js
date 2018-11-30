import React, { Component } from 'react';
import Navbar from './../components/navbar.js'
import submit from './../images/login.png';
import './Login.css';
import querystring from 'querystring';
import hash from 'js-sha256';
import axios from 'axios';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = async (event) => {
    event.preventDefault();

    const data = querystring.stringify({
      "username": this.state.username,
      "password": hash.sha256(this.state.password),
    });
    const res = await axios.post("/login", data);
    if(res.data === 404) {
      this.setState({ username: "", password: "" })
      alert("Incorrect password");
    } else {
      setTimeout(function(){ window.location = res.headers.location; }, 500);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="Standard-Container">
          <form onSubmit={this.handleLogin} id="login-form" action="/login" method="post">
            <h2 id="login-title">Login Page</h2>
            <h3 className="login-header">Username:</h3>
            <input name="username" onChange={this.handleInputChange} value={this.state.username} className="login-input" type="text"/>
            <h3 className="login-header">Password:</h3>
            <input name="password" onChange={this.handleInputChange} value={this.state.password} className="login-input" type="password"/>
            <label id="login-submit-label" for="login-submit"><img alt="submit" id="login-submit-image" src={submit} /></label>
            <input id="login-submit" type="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
