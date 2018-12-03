import React, { Component } from 'react';
import Navbar from './../components/navbar.js'
import './Register.css';
import submit from './../images/submit-register.png';
import querystring from 'querystring';
import hash from 'js-sha256';
import axios from 'axios';

class Register extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSignup = async (event) => {

    event.preventDefault();

    if (!this.state.email.includes("@")) {
      alert("Please Enter a Valid E-mail Address!");
      this.setState({ email: "" });
    } else if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't Match!");
      this.setState({ password: "", confirm: ""});
    } else if (this.state.password === "" || this.state.username === ""  || this.state.email === ""){
      alert("Please fill out the form completely!")
    } else {
      const data = querystring.stringify({
        "username": this.state.username,
        "password": hash.sha256(this.state.password),
        "email": this.state.email
      });

      const res = await axios.post("/register", data);
      if(res.data === 404) {
        alert("Username already exists or Email is already in use!");
        this.setState({ username: "", email: "", password: "", confirmPassword: "" })
      } else {

        setTimeout(function(){ window.location = res.headers.location; }, 1000);
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="Standard-Container">
          <form onSubmit={this.handleSignup} id="registration-form" action="/register" method="post">
            <h2 id="registration-title">Registration Form</h2>
            <h3 className="register-header">Username:</h3>
            <input className="register-input" type="text" placeholder="Username" name="username" onChange={this.handleInputChange} value={this.state.username}/>
            <h3 className="register-header">Password:</h3>
            <input className="register-input" type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
            <h3 className="register-header">Confirm Password:</h3>
            <input className="register-input" type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.handleInputChange} value={this.state.confirmPassword}/>
            <h3 className="register-header">E-mail:</h3>
            <input className="register-input" type="email" placeholder="E-mail" name="email" onChange={this.handleInputChange} value={this.state.email}/>
            <label id="register-submit-label" for="register-submit"><img alt="submit" id="register-submit-image" src={submit} /></label>
            <input id="register-submit" type="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
