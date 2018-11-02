import React, {Component} from 'react';
import logo from 'assets/logo.svg';
import {NavLink} from 'react-router-dom';

import AppSelect from './AppSelect';
import HackerForm from './HackerForm';
import MentorForm from './MentorForm';
import JudgeForm from './JudgeForm';
import VolunteerForm from './VolunteerForm';

class Application extends Component {
  constructor(props) {
    super(props)
    this.state = {
      application: 1
    }
  }

  toggleApplication = (event) => {
    let app = parseInt(event.target.dataset.app)
    this.setState({application: app})
  }

  renderForm = (application) => {
    console.log(typeof application)
    switch (application) {
      case 1: return <HackerForm />
      case 2: return <MentorForm />
      case 3: return <JudgeForm />
      case 4: return <VolunteerForm />
    }
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
        {this.renderForm(this.state.application)}
      </div>
    );
  }
}

export default Application;
