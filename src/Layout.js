import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import HttpsRedirect from 'react-https-redirect';

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
      <HttpsRedirect>
        <GlobalStyle />
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/apply" exact component={Application}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </div>
      </HttpsRedirect>
    );
  }
}

export default Layout;
