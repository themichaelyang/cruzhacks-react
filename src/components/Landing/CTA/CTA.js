import React, {Component} from 'react';
import network from 'assets/cta/network.svg';
import sparkles from 'assets/cta/sparkles.svg';
import collaborate from 'assets/cta/collaborate.svg';

class CTA extends Component {
  render() {
    return (
      <div className="cta-container">
        <div className="cta">
          <img src={network} alt="network" height="100px"/>
          <span className="cta__title">CONCEPT</span>
          <p className="cta__text">Put your thinking cap on and brainstorm an innovative idea that delivers a positive effect on your community</p>
        </div>
        <div className="cta">
          <img src={collaborate} alt="network" height="100px"/>
          <span className="cta__title">COLLABORATE</span>
          <p className="cta__text">Team up with students from 25+ universities, and 50+ superhero mentors as you power through the weekend!</p>
        </div>
        <div className="cta">
          <img src={sparkles} alt="network" height="100px"/>
          <span className="cta__title">CREATE</span>
          <p className="cta__text">Try out a new API, team up with your fellow students, and build something amazing at CruzHacks!</p>
        </div>
      </div>
    );
  }
}

export default CTA;
