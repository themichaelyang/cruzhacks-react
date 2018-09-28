import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.svg';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img className="logo" src={logo} alt="logo"/>
        <div className="hero__text">
          <h1 className="hero__text__header">CruzHacks 2019</h1>
          <p className="hero__text__quote">Create something that makes a difference.</p>
          <span className="hero__text__location">Porter Dining Hall, UC Santa Cruz</span>
          <span className="hero__text__location">January 19-21, 2019</span>
          <a href="#" className="hero__text__cta">Apps Open In Dec</a>
        </div>
        <img className="hero__bg" src={hero} alt="logo"/>        
      </div>
    );
  }
}

export default Hero;
