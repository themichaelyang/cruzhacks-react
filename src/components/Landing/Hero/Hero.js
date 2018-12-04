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

  scrollToContent = () => {
    window.scrollTo({
      top: document.querySelector('.mission').offsetTop,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 18-20, 2019 @ <a className="hero__link" href="https://goo.gl/maps/2gdMzVKgkv92" target="_blank" rel="noopener noreferrer">Stevenson Event Center</a></span>
        <div className="hero__button-container">
          <NavLink to="/apply" className="hero__button__cta hero__button">Apply!</NavLink>
          <a href="/Sponsorship_Packet_E.pdf" className="hero__button" target="_blank" rel="noopener noreferrer">Sponsoring?</a>
          <span className="hero__text__alt deadline">Deadline to Apply: December 20th</span>
        </div>
        <span className="hero__tiny" onClick={this.scrollToContent}>Learn More!</span>
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
}

export default Hero;
