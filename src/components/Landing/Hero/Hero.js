import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo.svg';
import hero from 'assets/hero.svg';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 18-20, 2019 @ Stevenson Event Center</span>
        <div className="hero__button-container">
          <NavLink to="/application" className="hero__button">Apps open in Nov</NavLink>
          <a href="/Sponsorship_Packet_E.pdf" className="hero__button" target="_blank" rel="noopener noreferrer">Sponsoring?</a>
        </div>
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
}

export default Hero;
