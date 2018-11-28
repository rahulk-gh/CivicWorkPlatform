import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import MyStory from './mystory';


const Page = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/myStory" component={MyStory} />
  </Switch>
)

export default Page;
