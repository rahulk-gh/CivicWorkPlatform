import React, { Component } from 'react';
import Navbar from './../components/navbar2.js';
import './SubmitStory.css';
import headline from './../images/headline.png';
import body from './../images/body.png';
import submit from './../images/submit.png';
import querystring from 'querystring';
import axios from 'axios';

class SubmitStory extends Component {

  state = {
    title: "",
    body: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitStory = async (event) => {
    event.preventDefault();

    const get = await axios.get("/api/findUser");
    const author = get.data;

    const data = querystring.stringify({
      "title": this.state.title.trim(),
      "author": author,
      "body": this.state.body.trim()
    });

    const res = await axios.post("/submitStory", data);
    alert("Story Submitted!")
    setTimeout(function(){ window.location = res.headers.location; }, 1000);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="Input-Container">
          <form onSubmit={this.submitStory} action="/submitstory" method="post">
            <img alt="temp" class="story-component-title" src={headline} />
            <input class="story-component" id="story-headline" name="title" onChange={this.handleInputChange} value={this.state.title} type="text"></input>
            <img alt="temp" id="story-component-body" class="story-component-title" src={body} />
            <textarea class="story-component" id="story-body" name="body" onChange={this.handleInputChange} value={this.state.body}></textarea>
            <label id="story-submit-label" for="story-submit"><img alt="temp" id="submit-image" src={submit} /></label>
            <input id="story-submit" type="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default SubmitStory;
