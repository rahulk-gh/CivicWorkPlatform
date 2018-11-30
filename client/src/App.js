import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage.js';
import NoMatch from './pages/Nomatch.js';
import SubmitStory from './pages/SubmitStory.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';

const App = () => (
<Router>
  <div>
    <Switch>
        <Route exact path ="/" component={Homepage} />
        <Route exact path ="/register" component={Register} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/dashboard" component={Dashboard} />
        <Route exact path ="/dashboard/newstory" component={SubmitStory} />
        <Route exact path ="/dashboard/edit-story/:id" component={EditStory} />
        <Route exact path ="/dashboard/all" component={SubmitStory} />
        <Route component={NoMatch} />
    </Switch>
  </div>
</Router>
);

export default App;
