import React, { Component, Fragment } from 'react';
import { createBrowserHistory } from "history";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

// pages for konnect
// import Components from "./views/Components/Components.js";
// import LandingPage from "./views/LandingPage/LandingPage.js";
// import ProfilePage from "./views/ProfilePage/ProfilePage.js";
// import PrivacyPage from "./views/PrivacyPage/PrivacyPage.js";
import AboutPage from "./views/AboutPage/AboutPage.js";
import AboutPage_ from "./views/AboutPage_/AboutPage.js";
import Towerr from "./tower/Towerr.js";
import More_Sorting from "./sorting/More_Sorting.js";

const API_KEY = process.env.KEY


// Alert options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

var hist = createBrowserHistory(); 

class App extends Component {

  render(){
    return (
            <Router  history={hist}>
              <Fragment>
                      <Switch>
                        <Route path="/about-page" component={AboutPage_} />
                       
                        <Route path="/more_sorting" component={More_Sorting} />
                        <Route path="/tower" component={Towerr} />
                        <Route exact path="/" component={AboutPage} />
                       
                      </Switch>
              </Fragment>
            </Router>
    );
  }
}

export default App;
