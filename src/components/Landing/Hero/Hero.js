import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import logo from 'assets/logo.svg';
import hero from 'assets/hero.svg';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subscribe: 'Subscribe'
    }
  }

  getEmail = (event) => {
    this.setState({email: event.target.value})
  }

  subscribeEmail = (event) => {
    if (!this.state.email) return
    axios.post(process.env.REACT_APP_SUBSCRIBE_ENDPOINT, {
        email: this.state.email
      })
      .then((response) => {
        this.setState({email: '', subscribe: "You've Been Subscribed!"})
      }).catch((error) => {
        console.log(error)
        this.setState({email: '', subscribe: "You've Been Subscribed!"})
      })
  }

  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 18-20, 2019 @ Stevenson Event Center</span>
        <div className="hero__button-container">
          <NavLink to="/apply" className="hero__button__cta hero__button">Apply!</NavLink>
          <a href="/Sponsorship_Packet_E.pdf" className="hero__button" target="_blank" rel="noopener noreferrer">Sponsoring?</a>
        </div>
        {/* <div className="hero__updates">
          <span className="hero__updates__title">Subscribe for email updates:</span>
          <input className="hero__updates__input" value={this.state.email} type="email" name="email" id="email" onChange={this.getEmail}/>
          <label htmlFor="email" className={this.state.email ? "active hero__updates__label" : "hero__updates__label"}>Email</label>
          <input type="submit" className="hero__updates__submit" value={this.state.subscribe} onClick={this.subscribeEmail}/>
        </div> */}
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
}

export default Hero;
