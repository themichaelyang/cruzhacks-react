import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from 'components/Landing';
import Application from 'components/Application';

import './styles/sass/base.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Router>
          <Switch>
            <Route path="/application" exact component={Application}/>
            <Route path="/" component={Landing}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Layout;
