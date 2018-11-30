import React, { Component } from 'react';
import Navbar from './../components/navbar.js'
import './Homepage.css';

class Homepage extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="Standard-Container"></div>
      </div>
    )
  }
}

export default Homepage;
