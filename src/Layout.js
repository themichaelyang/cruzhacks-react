import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Landing from 'components/Landing';
import Application from 'components/Application';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';

const GlobalStyle = createGlobalStyle`
  #mlh-trust-badge {
    @media(max-width: 600px) {
      display: none !important;
    }
  }
`

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/d7o59mpc" exact component={Application}/>
            <Route path="/" component={Landing}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Layout;
