import React, { Component } from 'react';
import Navbar from './../components/navbar2.js'
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {

  state = {
    stories: "TEMP"
  }

  componentDidMount() {
    this.loadStories();
  }

  highlight = (event) => {
    const a = event.target.style.backgroundColor;
    if(a === "yellow") {
      event.target.style.backgroundColor = "darkslategray"
    } else {
      event.target.style.backgroundColor = "yellow"
    }
  }

  loadStories = async () => {
    const stories = await axios.get('/dashboard/all')
    console.log(stories.data);
    this.setState({ stories: stories.data })
  }

  setLink = (event) => {
    const link = `/dashboard/${event.target.id}`
    event.target.href = link;
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="Dashboard-Container">
          {this.state.stories !== "TEMP" ?
          this.state.stories.map(story => (
            <div className="All-Story-Container">
              <h3 className="Story-Headers"><span className="Story-Headline">Headline: </span> "{story.title}"</h3>
              <span><a href="" onClick={this.setLink} id={story._id}>Edit Article</a></span>
              <div className="Story-Headers Story-Headers-Author">By: {story.author}</div>
              <div id="story-body-container" className="story-body-container">
              {story._bodyparsed.map(y => (
                <span className="story-body" onMouseEnter={this.highlight} onMouseLeave={this.highlight}>{y}</span>
              ))}
              </div>
            </div>
          )) : <div>No Stories</div>}
        </div>
      </div>
    )
  }
}

export default Dashboard;
