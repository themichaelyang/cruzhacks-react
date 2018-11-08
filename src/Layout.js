import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';

import Landing from 'components/Landing';
import Application from 'components/Application';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';


class Layout extends Component {
  render() {
    return (
      <HttpsRedirect>
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/d7o59mpc" exact component={Application}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </div>
      </HttpsRedirect>
    );
  }
}

export default Layout;
