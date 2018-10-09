import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.svg';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img className="hero__logo" src={logo} alt="logo"/>
        <h1 className="hero__title">CruzHacks 2019</h1>
        <span className="hero__text">Create something that makes a difference.</span>
        <span className="hero__text__alt">Jan 19-21, 2019 @ Stevenson Event Center</span>
        <a href="#" className="hero__apps">Apps open in Nov</a>
        <img src={hero} alt="" className="hero__bg"/>
      </div>
    );
  }
}

export default Hero;
