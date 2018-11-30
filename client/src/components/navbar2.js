import React from 'react';
import title from "./../images/title.png"

const NavBar = props => (
  <div id="NavBar">
    <a href="/"><img alt="title" id="titleimage" src={title} /></a>
    <div id="Group">
      <span id="span"><a className="button" href="/dashboard">All Published</a></span>
      <span className="span"><a className="button" href="/dashboard/voting">Voting</a></span>
      <span className="span"><a className="button" href="/dashboard/edit">Edit Stories</a></span>
      <span className="span"><a className="button" href="/dashboard/newstory">New Story</a></span>
      <span className="span"><a className="button" href="/logout">Log Out</a></span>
    </div>
  </div>
);

export default NavBar;
