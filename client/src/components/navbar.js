import React from 'react';
import title from "./../images/title.png"
import './navbar.css';

const NavBar = props => (
  <div id="NavBar">
    <a href="/"><img alt="title" id="titleimage" src={title} /></a>
    <div id="Group">
      <span id="span"><a className="button" href="/">Home</a></span>
      <span className="span"><a className="button" href="/login">Login</a></span>
      <span className="span"><a className="button" href="/register">Registration</a></span>
    </div>
  </div>
);

export default NavBar;
