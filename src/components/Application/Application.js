import React, {Component} from 'react';
import logo from 'assets/logo.svg';
import {NavLink} from 'react-router-dom';

import AppSelect from './AppSelect';

class Application extends Component {
  constructor(props) {
    super(props)
    this.state = {
      application: 0
    }
  }

  toggleApplication = (event) => {
    let app = event.target.dataset.app
    this.setState({application: app})
  }

  render() {
    return (
      <div className="application">
        <NavLink to="/"><img src={logo} alt="logo" className="application__logo"/></NavLink>
        <h1 className="application__title">CruzHacks 2019 Applications</h1>
        <div className="application__select">
          <span className="application__select__title">Choose an Application Type</span>
          <AppSelect name="Hacker" class={this.state.application == 1 ? 'selected' : ''} data="1" handler={this.toggleApplication}/>
          <AppSelect name="Mentor" class={this.state.application == 2 ? 'selected' : ''} data="2" handler={this.toggleApplication}/>
          <AppSelect name="Judge" class={this.state.application == 3 ? 'selected' : ''} data="3" handler={this.toggleApplication}/>
          <AppSelect name="Volunteer" class={this.state.application == 4 ? 'selected' : ''} data="4" handler={this.toggleApplication}/>
        </div>
      </div>
    );
  }
}

export default Application;
